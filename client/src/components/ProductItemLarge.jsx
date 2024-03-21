import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../services/CartService";
import NumberInput from "./NumberInput";
import { avgRating } from "./ProductItemSmall";

function ProductItemLarge({ product, onRatingAdd }) {
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  
  function onBuy() {
    addToCart(quantity, product.id, 1).then(() => {
        navigate(`/products/${product.id}`, {
          replace: true,
          state: { message: `Produkten lades till i kundkorgen.` }
        });
      });
  }

  return (
    <Card sx={{ width: 500, mb: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt="fruit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography component="legend" sx={{ ml: 2 }}>
        Rating:
      </Typography>
      <Box>
        <Rating
          sx={{ ml: 2 }}
          name="simple-controlled"
          defaultValue={avgRating(product)}
          onChange={(_, rating) => {
            setValue(rating);
          }}
          precision={0.5}
        />
        <Button
          onClick={() => onRatingAdd(value)}
          variant="contained"
          sx={{ ml: 4 }}
        >
          Skicka rating
        </Button>
      </Box>

      <CardActions sx={{ ml: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: 20, mr: 2 }}
        >
          {product.price} kr
        </Typography>

        <NumberInput
          onChange={(quantity) => setQuantity(quantity)}
          sx={{ mr: 5 }}
        />
        
        <Button
          sx={{ mr: 10 }}
          variant="contained"
          size="small"
          color="primary"
          onClick={onBuy}
        >
          Köp
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="admin" variant="contained">
          <Link to={`/products/${product.id}/edit`}>Ändra</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItemLarge;
