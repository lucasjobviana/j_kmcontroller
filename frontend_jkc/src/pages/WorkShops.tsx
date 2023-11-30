import React,{ useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useWorkShopContext } from '../shared/contexts';
import { useDebounce } from '../shared/tools';
// import { J_ListCard } from '../shared/components/list-card-container';
import { WorkShop } from '../shared/Entities';
import { ViewBlock } from '../shared/components/view-block';

interface Expense{
  row: {
    id: number;
    name: string;
  };
}

export function WorkShops() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedWorkShop, setSelectedWorkShop] = useState<WorkShop[]|[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const { workShops, create, del, getByName } = useWorkShopContext();
  const navigate = useNavigate();
  const tableHeaderProps = [
    { label: 'ID', name: 'id' },
    { label: 'Nome', name: 'name' },
  ];
  const tableHeaders = tableHeaderProps.map((header) => ({
    field: header.name, headerName: header.label, editable: false, width: 150,
  }));
  const tableHeadersWithButtons = [...tableHeaders,
    { field: 'btnEdit',
      headerName: 'Editar',
      type: 'button',
      renderCell: (expense:Expense) => (
        <Button
          variant="contained"
          color="primary"
          onClick={ () => { navigate(`edit/${expense.row.id}`); } }
        >
          {' '}
          <Edit />
        </Button>
      ) },
    { field: 'btnDeletar',
      headerName: 'Deletar',
      type: 'button',
      renderCell: (expense:Expense) => (
        <Button
          variant="contained"
          color="primary"
          onClick={ async () => {
            if (confirm(`Deseja excluir a oficina ${expense.row.name}?`)) {
              await del(expense.row.id);
            }
          } }
        >
          {' '}
          <Delete />
        </Button>
      ) },
  ];

  const tableRowProps = workShops.map((workShop) => ({
    id: workShop.id,
    name: workShop.name,

  }));

  const getDataFromStorage = async (name:string) => {
    debounce(async () => {
      setIsLoading(true);
      const querySuccess = await getByName(name);
      setTimeout(() => setIsLoading(!querySuccess), 1000);
    });
  };

  const handleRowClick = (workShop:WorkShop) => {
    if(!selectedWorkShop.some((v)=>v.id === workShop.id))
      setSelectedWorkShop([...selectedWorkShop, workShop]);
  };

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    getDataFromStorage(search);
  }, [search]);


  return (
    <LayoutBase
      title="Oficinas"
      toolBar={ <J_ToolBar
        searchButtonEnabled
        addButtonEnabled
        deleteButtonEnabled
        saveButtonEnabled
        searchButtonLoading={ isLoading }
        addButtonLoading={ isLoading }
        saveButtonLoading={ isLoading }
        deleteButtonLoading={ isLoading }
        addLabelText="Nova oficina"
        searchText={ search }
        handleChangeSearchText={ (texto) => setSearchParams({ search: texto }, { replace: true }) }
        handleClickAdd={ async () => { const id = await create('Nova oficina'); navigate(`edit/${id}`); } }
      /> }
    >
      {' '}
      {workShops.length}

      <Box component={ Paper } variant="outlined" sx={ { height: 'auto', width: '100%' } }>
        <DataGrid
          rows={ tableRowProps }
          loading={ isLoading }
          columns={ tableHeadersWithButtons }
          rowHeight={ 45 }
          onRowClick={ (row) => handleRowClick(row.row) }

          initialState={ {
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          } }
          
          disableRowSelectionOnClick
        />
      </Box>

      {/* <J_ListCard list={ workShops } handleClickCard={handleRowClick} /> */}
 
      {
        selectedWorkShop.length > 0
        && (
          <Box>
            <h3>Veiculos selecionados</h3>
            <ul>
              {selectedWorkShop.map((vehicle) => (
                <li key={ vehicle.id }>
                  {vehicle.name}
                </li>
              ))}
            </ul>
          </Box>
        )
      }

      {
        selectedWorkShop.length > 0
        && (
          <>
            {/* /  <h3>Veiculos selecionados</h3> */}
           
            {selectedWorkShop.map((vehicle) => (
              <ViewBlock key={ vehicle.id }>
                {vehicle.name}
              </ViewBlock>
            ))}
             
          </>
        )
      }

  
    </LayoutBase>
  );
}
