import React, { useEffect, useMemo, useState } from 'react';
import { useFleetContext } from '../../contexts';
import { Autocomplete, TextField } from '@mui/material';
import {  useDebounce } from '../../tools';
import { useField } from '@unform/core';

type TAutoCompleteOption = {
  id: number;
  label: string;
}

interface IAutoCompleteFleetProps {
  id?: number;
}

export const AutoCompleteVehicles: React.FC<IAutoCompleteFleetProps>  = ({ id }) => {
  const { fleet, getByName } = useFleetContext();
  const { fieldName, registerField, error, clearError } = useField('vehiclesIds');
  const { debounce } = useDebounce();
  const [selectedId, setSelectedId] = useState<number | undefined>(id);
  const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const populate = () =>{
    setIsLoading(true);

    debounce(async () => {
      await getByName('');
      setIsLoading(false);
      setOpcoes(
        fleet.map((vehicle) => ({ id: vehicle.id, label: vehicle.name }))
      );
    });
  };

  useEffect(()=>{
    populate();
  },[]);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => selectedId,
      setValue: (_, newSelectedId) => setSelectedId(newSelectedId),
    });
  }, [registerField, fieldName, selectedId]);

  useEffect(() => {
    populate();
    // setIsLoading(true);

    // debounce(async () => {
    //   await getByName('');
    //   setIsLoading(false);
    //   setOpcoes(
    //     fleet.map((vehicle) => ({ id: vehicle.id, label: vehicle.name }))
    //   );
    // });
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

      options={opcoes}
      loading={isLoading}

      value={autoCompleteSelectedOption}
      onInputChange={(_, newValue) => setSearchText(newValue)}
      onChange={(_, newValue) => { setSelectedId(newValue?.id); setSearchText(''); clearError(); }}

      renderInput={(params) => (
        <TextField
          {...params}

          label="Carro"
          
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
};