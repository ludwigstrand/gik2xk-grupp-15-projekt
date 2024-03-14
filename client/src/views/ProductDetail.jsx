import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import { addRating, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Box, Container, Paper, Rating, Typography } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]);

  const navigate = useNavigate();

  function onRatingAdd(rating) {
    addRating({product}, rating)
      .then((rating) => getOne(id))
      .then((product) => setProduct(product));
  }
  const location = useLocation();
  const message = location.state?.message;
  const [value, setValue] = useState(2);

  function clearMessage() {
    window.history.replaceState({}, "");
  }

  return product ? (
    <>
    <Paper elevation={3} sx={{ pb: 10, pt: 10, borderRadius: 2 }}>
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
      <Container maxWidth="lg" sx={{display: "flex", justifyContent:"center"}}>
        <ProductItemLarge product={product} />
        {/* <Box>
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
        </Box> */}
      </Container>
      </Paper>
    </>
  ) : (
    <h3>Kunde inte hämta inlägg</h3>
  );
}

export default ProductDetail;