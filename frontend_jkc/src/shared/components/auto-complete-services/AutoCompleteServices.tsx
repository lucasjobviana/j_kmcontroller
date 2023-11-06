import React, { useEffect, useMemo, useState } from 'react';
import { useServiceTaskContext } from '../../contexts';
import { Autocomplete, TextField } from '@mui/material';
import {  useDebounce } from '../../tools';
import { useField } from '@unform/core';

type TAutoCompleteOption = {
  id: number;
  label: string;
}

interface IAutoCompleteServiceTaskProps {
  propName: string;
  id?: number;
  name?: string;
  onSelect: (id: number, indexOnList: number) => void;
  selectedList: number[];
}

export const AutoCompleteServiceTask: React.FC<IAutoCompleteServiceTaskProps>  = ({ propName, id, name, onSelect, selectedList }) => {
  const { serviceTasks, getByName } = useServiceTaskContext();
  const { fieldName, registerField, error, clearError } = useField(propName);
  const { debounce } = useDebounce();
  const [selectedId, setSelectedId] = useState<number | undefined>(id);
  const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState(name);


  const populate = async () =>{
    setIsLoading(true);

    debounce(async () => {
      await getByName('');
      setIsLoading(false);
      setOpcoes(
        serviceTasks.map((service) => ({ id: service.id, label: service.name }))
      );
    });
  };

  useEffect(() => {
    setOpcoes(
      serviceTasks.map((service) => ({ id: service.id, label: service.name }))
    );
  }, [serviceTasks]);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => { return selectedId;},
      setValue: (_, newSelectedId) => { onSelect(Number(newSelectedId),Number(propName.split('_')[1])); setSelectedId(newSelectedId);},
    });
  }, [registerField, fieldName, selectedId]);

  useEffect(() => {
    populate();
  }, [searchText]);

  const autoCompleteSelectedOption = useMemo(() => {
    if (!selectedId) return null;

    const selectedOption = opcoes.find(opcao => opcao.id === selectedId);
    if (!selectedOption) return null;

    return selectedOption;
  }, [selectedId, opcoes]);

   

  return(
    <Autocomplete
      openText='Abrir'
      closeText='Fechar'
      noOptionsText='Sem opções'
      loadingText='Carregando...'

      disablePortal
      

      options={opcoes.filter((service) => !selectedList.includes(service.id))}
      loading={isLoading}

      value={autoCompleteSelectedOption}
     
      onInputChange={(_, newValue) => setSearchText(newValue)}
      onChange={(_, newValue) => { onSelect(Number(newValue?.id),Number(propName.split('_')[1])); setSelectedId(newValue?.id); setSearchText(''); clearError(); }}

      renderInput={(params) => (
        <TextField
          {...params}

          label="Novo serviço"
          variant='filled'
          size='small' fullWidth
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
};