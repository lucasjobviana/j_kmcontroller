import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useField } from '@unform/core';
export interface IJ_DataPickerProps  {
  id?: number;
  value?: Date;
  name?: string;
}
export const J_DataPicker: React.FC<IJ_DataPickerProps> = ({value,name='name'}) => {
  const { fieldName, registerField } = useField(name);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs(value));


  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => selectedDate ,
      setValue: (_, newSelectedDate) => setSelectedDate(newSelectedDate),
    });
  }, [registerField, fieldName, selectedDate]);

  return (
    <DatePicker 
      closeOnSelect={true}
      label='Inicio'
      format='DD/MM/YYYY'
      defaultValue={dayjs(value)}  
      value={selectedDate}    
      onChange={(newValue) => {
        newValue?.add(1,'day');
        setSelectedDate(newValue);
      }}
      
      
    />
  );
};