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
import { Link } from "react-router-dom";

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
          <Button
            onClick={() => addRating(product.id, value)}
            variant="contained"
            sx={{ ml: 2 }}
          >
            Skicka rating
          </Button>
        </Box>

        
          <CardActions sx={{ml:1}}>
            <Typography variant="body2" color="text.secondary">
              {product.price} kr
            </Typography>
            <Button size="small" color="primary" variant="contained">
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
