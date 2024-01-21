import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popup from 'reactjs-popup';
import './recipe_card.css'



 function Recipe_Card(props) {
  return (
    <Card sx={{ minWidth: 300 ,maxWidth:345 }}>
     
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
         {props.recipeText.slice(0,40)}
        </Typography>
      </CardContent>
      <CardActions>
      <Popup
    trigger={<Button>Learn More</Button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {props.name} </div>
        <div className="content">
          {' '}
          {props.recipeText}
        </div>
       
      </div>
    )}
  </Popup>
        
      </CardActions>
    </Card>
  );
}
export default Recipe_Card;
