import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import { addRating, getOne } from '../services/ProductService';
import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getOne(id).then((product) => setProduct(product));
      }, [id]);

      const navigate = useNavigate();

      function onRatingAdd(rating) {
        addRating(product.id, rating)
          .then((rating) => getOne(id))
          .then((product) => setProduct(product));
      }
      const location = useLocation();
      const message = location.state?.message;
      const [open, setOpen] = useState(true);
    
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
              severity="success">
              {message}
            </Alert>
          )}
          <Container maxWidth="lg">
            <ProductItemLarge product={product} />
            <Box>
              <Typography variant="h3">Ratings</Typography>
            </Box>
          </Container>
        </>
      ) : (
        <h3>Kunde inte hämta inlägg</h3>
      );
}

export default ProductDetail;
