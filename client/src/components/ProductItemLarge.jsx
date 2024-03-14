import { Button, Rating, Typography } from "@mui/material";
import { addRating } from "../services/ProductService";

function ProductItemLarge({ product }) {
  return (
    <>
      <div>
        <h1>{product.title}</h1>
        <img src={product.imageUrl} alt="Bild" />
        <p>{product.price} kr</p>
        <p>{product.description}</p>
      </div>

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
