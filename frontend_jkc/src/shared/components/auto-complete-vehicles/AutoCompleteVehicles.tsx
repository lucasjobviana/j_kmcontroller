import React, { useEffect, useMemo, useState } from 'react';
import { useFleetContext } from '../../contexts';
import { Autocomplete } from '@mui/material';
import {  useDebounce } from '../../tools';
import { useField } from '@unform/core';
import { J_TextField } from '..';

type TAutoCompleteOption = {
  id: number;
  label: string;
}

interface IAutoCompleteFleetProps {
  id?: number;
  name?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  // name='initialDate' label='Inicio' value={maintenance.initialDate} defaultV={maintenance.initialDate.toString()}
}

export const AutoCompleteVehicles: React.FC<IAutoCompleteFleetProps>  = ({ id, name, defaultValue }) => {
  const { fleet, getByName } = useFleetContext();
  const { fieldName, registerField, error, clearError } = useField('vehiclesIds');
  const { debounce } = useDebounce();
  const [selectedId, setSelectedId] = useState<number | undefined>(id);
  const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('alfredo');

  const populate = async () =>{
    setIsLoading(true);

    debounce(async () => {
      await getByName('');
      setIsLoading(false);
      setOpcoes(
        fleet.map((vehicle) => ({ id: vehicle.id, label: vehicle.name }))
      );
    });
  };

  useEffect(() => {
    setOpcoes(
      fleet.map((vehicle) => ({ id: vehicle.id, label: vehicle.name }))
    );
  }, [fleet]);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => selectedId,
      setValue: (_, newSelectedId) => setSelectedId(newSelectedId),
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

      options={opcoes}
      loading={isLoading}

      value={autoCompleteSelectedOption}
      onInputChange={(_, newValue) => setSearchText(newValue)}
      onChange={(_, newValue) => { setSelectedId(newValue?.id); setSearchText(''); clearError(); }}

      renderInput={(params) => (
        <J_TextField

          name={name}
          defaultV={defaultValue}

          {...params}

          label="Carro"
          
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
};