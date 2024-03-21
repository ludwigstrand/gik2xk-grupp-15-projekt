import { useLocation, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import { addRating, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Alert, Box, Card, Container, List, Paper, Typography } from "@mui/material";

import RatingList from "../components/RatingList";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const message = location.state?.message;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    getOne(id).then(setProduct);
  }, [id]);

  function onRatingAdd(ratingValue) {
    addRating(id, ratingValue)
      .then(() => getOne(id))
      .then(setProduct)
      .catch((error) => console.error("Error updating the rating:", error));
  }

  function clearMessage() {
    window.history.replaceState({}, '');
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
    <Paper elevation={3} sx={{ pb: 10, pt: 10, borderRadius: 2 }}>
      
      <Container maxWidth="lg" sx={{display: "flex", justifyContent:"center"}}>
        <Box>
          <ProductItemLarge product={product} onRatingAdd={onRatingAdd} />
          <Typography variant="h3">Betyg</Typography>
          <Card sx={{mt:2}}>
          {product.ratings && (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {product.ratings.map((rating, i) => (
                <RatingList key={`rating_${i}`} rating={rating} />
              ))}
            </List>
          )}
          </Card>
        </Box>
      </Container>
      </Paper>
      </>
  ) : (
    <h3>Kunde inte hämta produkt</h3>
  );
}

export default ProductDetail; 