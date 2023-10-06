import React, { useEffect, useState } from 'react';
import { TextField, BaseTextFieldProps, Autocomplete } from '@mui/material';
import { useField } from '@unform/core';
import { J_Skeleton } from '../../../tools';
import { usePlaceContext } from '../../../contexts';

export interface IJ_AutoCompleteFieldProps extends BaseTextFieldProps {
  name?: string;
  defaultV?: string;
  // multiline?: boolean;
  // maxRows?: number;
}

export const J_AutoCompleteField: React.FC<IJ_AutoCompleteFieldProps> = ({ name, defaultV, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);
  const [value, setValue] = useState(defaultV);
  const { getByName, fleet: categories } = usePlaceContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => {
        setValue(newValue);
      }
    });
    const getCategories = async () => {
      const hasSearch = await getByName('');
      setIsLoading(!hasSearch);
    };
    getCategories();
  }, [registerField, fieldName, value]);

  const categoriesOptions = categories.map((category) => ({
    label: category.name,
    id: category.id,
  }));

  return (
    <>
      <J_Skeleton isLoading={isLoading} >
        <Autocomplete
          componentName=''
          {...rest}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => {
            setValue(e.target.value);
            error && clearError();
          }}
          disablePortal
          id="combo-box-demo"
          options={categoriesOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={JLabel} />}
        />
      </J_Skeleton>
    </>
  );
};
