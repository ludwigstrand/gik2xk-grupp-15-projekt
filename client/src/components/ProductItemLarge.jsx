import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
//Tagit bort rad 13:
// import { addRating } from "../services/ProductService";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../services/CartService";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import QuantityInput from "./NumberInput";
import NumberInput from "./NumberInput";
import { avgRating } from "./ProductItemSmall";

//Lagt till onRatingAdd som in, rad 18
function ProductItemLarge({ product, onRatingAdd }) {
  const [value, setValue] = useState(0);

  let amount = 0;

  return (
      <Card sx={{ width: 500, mb: 10 }}>
        <CardActionArea>
          <CardMedia
            // sx={{ height: 100 }}
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
            onChange={(event, rating) => {
              setValue(rating);
            }}
            // Lagt till rad 50
            onSave={onRatingAdd}
            precision={.5}
          />
          <Button
            //Ändrat rad 55
            onClick={() => onRatingAdd(value)}
            //  onClick={() => addRating(product.id, value)}
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
            sx={{ mr: 10 }}
            slotProps={{
              input: {
                // this exactly the same as onInputChange above
                onChange: (event) =>
                  console.log(`the input value is: ${event.target.value}`),
              },
            }}
          />
          <Button
            sx={{ mr: 10 }}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => addToCart(1, product.id, 1)}
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
          <Button size="small" color="info" variant="contained">
            <Link to={`/products/${product.id}/edit`}>
            Ändra
            </Link>
          </Button>
        </CardActions>
      </Card>
  );
}

export default ProductItemLarge;
