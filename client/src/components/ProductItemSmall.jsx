import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

function ProductItemSmall(props) {
  return (
   
        <Card sx={{ width:300, mb: 5, display:"flex", flexWrap:"wrap"}}>
          <CardActionArea>
            <CardMedia sx = {{height:200}}
              component="img"
              image={props.imageUrl}
              alt="fruit"
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
