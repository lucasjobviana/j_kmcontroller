import React from 'react';
import { J_Card } from './j_card';
import { Container, Grid } from '@mui/material';
import { IVehicle } from '../../Entities';

interface IListCardProps{
  list: IVehicle[],
}

// const ListItemLink: React.FC<IListCardProps> = ({ to, icon, label, onClick }) => {
//   const navigate = useNavigate();
//   const resolvedPath = useResolvedPath(to);
//   const match = useMatch({ path: resolvedPath.pathname, end: true });

//   const handleClick = () => {
//     navigate(to);
//     onClick?.();
//   };

//   return (
//     <ListItemButton selected={!!match} onClick={handleClick} >
//       <ListItemIcon>
//         {icon}
//       </ListItemIcon>
//       <ListItemText primary={label} />
//     </ListItemButton>
//   );
// };

export const J_ListCard: React.FC<IListCardProps> = ({list}) => {
  const mock = list;
  return (
    <>
   
    <Container sx={{ py: 8 }} maxWidth="md">

<Grid container spacing={4}>
{
      mock.map((obj)=>(<J_Card to="asd" obj={obj} />))
    }
</Grid>
</Container> 
    </>
  );

};