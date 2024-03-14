import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import { addRating, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Box, Container, Rating, Typography } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);

  const navigate = useNavigate();
  
  function onRatingAdd(ratingValue) {
    addRating(id, ratingValue) // Fix this line to use id directly
      .then(() => getOne(id))
      .then((product) => setProduct(product))
      .catch((error) => console.error("Error updating the rating:", error));
  }

  const location = useLocation();
  const message = location.state?.message;
  const [value, setValue] = useState(2);

  function clearMessage() {
    window.history.replaceState({}, "");
  }

  return product ? (
    <>
      {message && open && (
        <Alert
          onClose={() => {
            setOpen(false);
            clearMessage();
          }}
          variant="filled"
          severity="success"
        >
          {message}
        </Alert>
      )}
      <Container maxWidth="lg">
        <ProductItemLarge product={product} />
        <Box>
          <div>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                onRatingAdd(newValue);
              }}
              precision={1}
            />
          </div>
        </Box>
      </Container>
    </>
  ) : (
    <h3>Kunde inte hämta inlägg</h3>
  );
}

export default ProductDetail;