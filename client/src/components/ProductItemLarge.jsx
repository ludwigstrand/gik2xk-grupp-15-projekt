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
import { addRating } from "../services/ProductService";
import { useState } from "react";

function ProductItemLarge({ product }) {
  const [value, setValue] = useState(0);


  return (
    <>
      <Card sx={{ width: 500, mb: 10 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 300 }}
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
        </CardActionArea>
        <Typography component="legend" sx={{ ml: 2 }}>
          Rating:
        </Typography>
        <Box>
          <Rating
            sx={{ ml: 2 }}
            name="simple-controlled"
            value={value}
            onChange={(event, rating) => {
              setValue(rating);
            }}
            precision={1}
          />
          <Button onClick={() => addRating(product.id, value)} variant="contained" sx={{ ml: 2 }}>
            Skicka rating
          </Button>
        </Box>

        <CardActions>
          <Button size="small" color="primary">
            Köp
          </Button>
        </CardActions>
      </Card>

      {/* <Typography component="legend"></Typography>
<Rating
  name="simple-controlled"
  onChange={(event, newValue) => {
    addRating(product.id, newValue);
  }}
/> */}
      {/* <Button onClick={() => addRating(product.id, newValue)}>Spara Betyg</Button> */}
    </>
  );
}

export default ProductItemLarge;
