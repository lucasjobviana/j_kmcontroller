import React, { useEffect, useState } from 'react';
import { TextField, BaseTextFieldProps } from '@mui/material';
import { useField } from '@unform/core';

export interface IJ_TextFieldProps extends BaseTextFieldProps {
  name?: string;
  defaultV?: string;
  // multiline?: boolean;
  // maxRows?: number;
}

export const J_TextField: React.FC<IJ_TextFieldProps> = ({ name='name', defaultV, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name=name.toString());
  const [value, setValue] = useState(defaultV);


  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => {
        setValue(newValue);
      }
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      name={name}
      {...rest}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => {
        setValue(e.target.value);
        error && clearError();
      }}
      error={!!error}
      helperText={error}
      variant='filled'
      size='small' fullWidth
    />
  );
};
