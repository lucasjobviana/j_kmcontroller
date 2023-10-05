import { useNavigate, useParams } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
// import { Delete, Edit } from '@mui/icons-material';
import { LayoutBase } from '../shared/layouts';
import { J_ToolBar } from '../shared/components/tool-bar';
import { useFleetContext } from '../shared/contexts';
import { FormCategoryDetail } from '../shared/components/form';

export const VehicleDetail = () => {
  const {  del } = useFleetContext();
  const { id='nova' } = useParams<'id'>();
  const { create, fleet: categories } = useFleetContext();
  const navigate = useNavigate();
  const category = categories.find((category) => Number(category.id) === Number(id));

  const handleDelete = async () => {
    if(confirm(`Deseja excluir o veiculo ${id} `)) {
      await del(Number(id));
      navigate('/frota');
    }
  };
  return (
    <>
      <LayoutBase title='Frota - Detalhes' toolBar={<J_ToolBar
        addButtonEnabled
        deleteButtonEnabled
        deleteLabelText='Deletar'
        saveLabelText='Salvar'
        backTo='/Categorias'
        handleClickDelete={ handleDelete}
        handleClickAdd={async () => {const id = await create('Nova Categoria');navigate(`/Categorias/detalhes/${id}`);}}
      />}  >

        <Box height={30} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={1} component={Paper} variant='outlined' >
          <Typography variant='h6' component='h1' >
            {
              category ?
                `${id||'nova'} - ${category.name}` :
                'Categoria não encontrada'
            }
          </Typography>
        </Box>

        <Box component={Paper} variant='outlined' sx={ { height: 'auto', width: '100%' } }>

          <FormCategoryDetail categoryId={id} category={category} />
        </Box>
      </LayoutBase>
    </>
  );
};
