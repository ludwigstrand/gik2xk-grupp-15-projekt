import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProductItemSmall(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={props.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
          <Typography variant="body2" color="text.secondary">
              {props.price} kr
              </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Köp
      </Button>
    </CardActions>
  </Card>
  );
}

export default ProductItemSmall;
