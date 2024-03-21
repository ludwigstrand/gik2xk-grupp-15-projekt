import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { truncate } from "../common/formatHelpers";
import { Button, Rating, CardActionArea, CardActions, Alert } from "@mui/material";
import { addToCart } from "../services/CartService";

export function avgRating(product) {
  let avgRating = 0;

  product.ratings.length > 0 &&
    product.ratings.map((index) => (avgRating += index.rating));
  return avgRating / product.ratings.length;
}

function ProductItemSmall({ product }) { 

const [showMessage, setShowMessage] = useState(false)

const onBuy = () => {
  addToCart(1, product.id, 1); 
  setShowMessage(true);
  setTimeout(() => {
    setShowMessage(false);
  }, 3000); 
};

  return (
      <Card sx={{ width: 300, mb: 5 }}>
        <CardActionArea>
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
                {truncate(product.description, 75)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price} kr
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <Typography component="legend" sx={{ ml: 2, fontSize: 20 }}>
          Betyg:
        </Typography>
        <Rating
          name="half-rating"
          value={avgRating(product)}
          precision={0.5}
          readOnly
          sx={{ ml: 2 }}
        />
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={onBuy}
          >
            Köp
          </Button>
          {showMessage && <Typography sx={{fontSize:15}}>Lades till i kundvagn</Typography>}
        </CardActions>
      </Card>
  );
}

export default ProductItemSmall;
