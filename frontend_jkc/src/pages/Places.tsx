import React,{ useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { usePlaceContext } from '../shared/contexts';
import { useDebounce } from '../shared/tools';

interface Expense{
  row: {
    id: number;
    name: string;
  };
}

export const Places = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const {  places, getByName, del, create } = usePlaceContext(); 
  const navigate = useNavigate();
  const tableHeaderProps = [
    { label: 'ID', name: 'id' },
    { label: 'Nome', name: 'name' },
  ];
  const tableHeaders = tableHeaderProps.map((header) => ({
    field: header.name, headerName: header.label, editable: false, width: 150
  }));
  const tableHeadersWithButtons = [...tableHeaders,
    { 
      field: 'btnEdit',
      headerName: 'Editar',
      type: 'button',
      renderCell: (expense:Expense) => (
        <Button
          variant="contained"
          color="primary"
          onClick={ () => { navigate(`details/${expense.row.id}`);} } 
        > <Edit />
        </Button>
      ) 
    },
    { 
      field: 'btnDeletar',
      headerName: 'Deletar',
      type: 'button',
      renderCell: (expense:Expense) => (
        <Button
          variant="contained"
          color="primary"
          onClick={ async () => {
            if(confirm(`Deseja excluir a categoria ${expense.row.name} `)) {
              await del(expense.row.id);
            } }
          }
        > <Delete />
        </Button>
      ) },
  ];
   
  const tableRowProps = places.map((category) => ({
    id: category.id,
    name: category.name,

  }));

  const getDataFromStorage = async (name:string) => {
    debounce(async ()=>{
      setIsLoading(true);
      const querySuccess =  await getByName(name);
      setTimeout(() => setIsLoading(!querySuccess), 1000);
    });

  };

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect( () => {
    getDataFromStorage(search);
  }, [search]);

  return (
    <>
      <LayoutBase title='Destinos' toolBar={<J_ToolBar
        searchButtonEnabled
        addButtonEnabled
        deleteButtonEnabled
        saveButtonEnabled
        searchButtonLoading={isLoading}
        addButtonLoading={isLoading}
        saveButtonLoading={isLoading}
        deleteButtonLoading={isLoading}
        addLabelText='Novo destino'
        searchText={search}
        handleChangeSearchText={(texto) => setSearchParams({ search: texto }, { replace: true })}
        handleClickAdd={async () => {const id = await create('Novo destino');navigate(`details/${id}`);}}

      />}  > {places.length}

        <Box component={Paper} variant='outlined' sx={ { height: 'auto', width: '100%' } }>
          <DataGrid
            rows={ tableRowProps }
            loading={ isLoading }
            columns={ tableHeadersWithButtons }
            rowHeight={ 45 }

            initialState={ {
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            } }
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        {/* <J_ListCard list={place} /> */}
      </LayoutBase>
    </>
  );
};