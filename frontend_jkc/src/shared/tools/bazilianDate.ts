export const convertoToBrazilianDateFormat = (data:string) => {
  const date = new Date(data);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
};

export const convertFromBrazilianDateFormat = (brazilianDate:string) => {
  const parts = brazilianDate.split('-');
  if (parts.length === 3) {
    const newDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    return newDate;
    // const day = parseInt(parts[0], 10);
    // const month = parseInt(parts[1], 10);
    // const year = parseInt(parts[2], 10);

    // if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    //   return new Date(year, month - 1, day).toISOString().split('T')[0];
    // }
  }
  return new Date();
};
