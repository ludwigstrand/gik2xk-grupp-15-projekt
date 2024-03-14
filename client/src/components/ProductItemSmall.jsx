import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Rating, CardActionArea, CardActions } from "@mui/material";



function ProductItemSmall({product}) {
  return (
    
    <Card sx={{ width: 300, mb: 5}}>
      <CardActionArea >
      <Link to={`/products/${product.id}`}>
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          image={product.imageUrl}
          alt="fruit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price} kr
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <Typography component="legend" sx={{ml:2}}>Rating:</Typography>
      <Rating name="read-only" value={product.rating} readOnly sx={{ml:2}}/>
      <CardActions>
        <Button size="small" color="primary">
          Köp
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItemSmall;
