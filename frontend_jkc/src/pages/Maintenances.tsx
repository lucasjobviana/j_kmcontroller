import React,{ useEffect, useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useMaintenanceContext } from '../shared/contexts';
import { useDebounce } from '../shared/tools';
import { Maintenance } from '../shared/Entities';
import { ViewBlock } from '../shared/components/view-block';

interface Expense{
  row: {
    id: number;
    name: string;
  };
}

export function Maintenances() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMaintenance, setSelectedMaintenance] = useState<Maintenance[]|[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const { maintenances, create, del, getByVehicleName } = useMaintenanceContext();
  const navigate = useNavigate();
  const tableHeaderProps = [
    { label: 'ID', name: 'id' },
    { label: 'Descricao', name: 'name' },
    { label: 'Veiculo', name: 'vehicleName' },
    { label: 'Oficina', name: 'workShopName' },
  ];
  const tableHeaders = tableHeaderProps.map((header) => ({
    field: header.name, headerName: header.label, editable: false, width: header.label.length *30,
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
            if (confirm(`Deseja excluir a manutenção ${expense.row.id}?`)) {
              await del(expense.row.id);
            }
          } }
        >
          {' '}
          <Delete />
        </Button>
      ) },
  ];

  const tableRowProps = maintenances.map((maintenance) => ({
    id: maintenance.id,
    name: maintenance.description || 'sem descrição',
    vehicleName: maintenance.vehicle?.name || 'sem veiculo',
    workShopName: maintenance.workshop?.name || 'sem oficina',
  }));

  const getDataFromStorage = async (vehicleName:string) => {
    debounce(async () => {
      setIsLoading(true);
      const querySuccess = await getByVehicleName(vehicleName);
      setTimeout(() => setIsLoading(!querySuccess), 600);
    });
  };

  const handleRowClick = (maintenance:Maintenance) => {
    if(!selectedMaintenance.some((v)=>v.id === maintenance.id))
      setSelectedMaintenance([...selectedMaintenance, maintenance]);
  };

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    getDataFromStorage(search);
  }, [search]);

  console.log('Minhas manutenções: ', maintenances);
  console.log(maintenances[0]);

  return (
    <LayoutBase
      title="Manutenções"
      toolBar={ <J_ToolBar
        searchButtonEnabled
        addButtonEnabled
        deleteButtonEnabled
        saveButtonEnabled
        searchButtonLoading={ isLoading }
        addButtonLoading={ isLoading }
        saveButtonLoading={ isLoading }
        deleteButtonLoading={ isLoading }
        addLabelText="Nova manutenção"
        searchText={ search }
        handleChangeSearchText={ (texto) => setSearchParams({ search: texto }, { replace: true }) }
        handleClickAdd={ async () => { const id = await create('Nova Manutenção'); navigate(`edit/${id}`); } }
      /> }
    >
      {' '}
      {maintenances.length}

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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      {/* <J_ListCard list={ workShops } handleClickCard={handleRowClick} /> */}
 
      {
        selectedMaintenance.length > 0
        && (
          <Box>
            <h3>Manutenções selecionadas</h3>
            <ul>
              {selectedMaintenance.map((maintenance) => (
                <li key={ maintenance.id }>
                  {maintenance.description}
                </li>
              ))}
            </ul>
          </Box>
        )
      }

      {
        selectedMaintenance.length > 0
        && (
          <>
            {/* /  <h3>Veiculos selecionados</h3> */}
           
            {selectedMaintenance.map((maintenance) => (
              <ViewBlock key={ maintenance.id }>
                {maintenance.description}
              </ViewBlock>
            ))}
             
          </>
        )
      }
    </LayoutBase>
  );
}