import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFleetContext } from "../../../contexts";
import { Delete, Edit } from '@mui/icons-material';

interface ICardProps {
    to:string;
    obj:{name:string,descrition?:string,id:number,image:string}
    onClick?: () => void | undefined;
  }

export const J_Card : React.FC<ICardProps> = ({obj}) =>{
  const { del } = useFleetContext();
  const navigate = useNavigate();
    return (
        <Grid item key={`${"title"}`} xs={12} sm={6} md={4}>
  <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <CardMedia
      component="div"
      sx={{
        // 16:9    
        pt: '56.25%',
      }}
      
      // image={obj.image}
      image={"https://consorciomagalu.com.br/wp-content/uploads/2020/06/onibus-caminhao-consorcio-magalu05.jpg"}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        { obj.name }
      </Typography>
      <Typography>
        { obj.name }
      </Typography>
    </CardContent>
    <CardActions> 
  
      <Button size="small" startIcon={<Edit />}  onClick={ () => { navigate(`details/${obj.id}`);} } >Editar</Button>
      <Button size="small" startIcon={<Delete />}  onClick={ async () => {
            if(confirm(`Deseja excluir a categoria ${obj.name} `)) {
              await del(obj.id);
            } }
          } >Deletar
      </Button>
    </CardActions>
  </Card>
</Grid> 
    )

}