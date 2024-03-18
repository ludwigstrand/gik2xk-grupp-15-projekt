import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductItemLarge from "../components/ProductItemLarge";
import { addRating, getOne } from "../services/ProductService";
import { useEffect, useState } from "react";
import { Alert, Box, Container, List, Rating, Paper, Typography } from "@mui/material";
// Rad 7 tillagd
import RatingList from "../components/RatingList";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
  const [value, setValue] = useState(2);

  useEffect(() => {
    getOne(id).then(setProduct);
  }, [id]);

  //Kommenterat ut:
/*   useEffect(() => {
    getOne(id).then((product) => setProduct(product));
  }, [id]); */



  function onRatingAdd(ratingValue) {
    addRating(id, ratingValue) // Fix this line to use id directly
    //Justerat rad 33
      .then(() => getOne(id))
/*       .then((product) => setProduct(product)) */
      .then(setProduct)
      .catch((error) => console.error("Error updating the rating:", error));
  }



  function clearMessage() {
    window.history.replaceState({}, "");
  }

  return product ? (
    <>
    <Paper elevation={3} sx={{ pb: 10, pt: 10, borderRadius: 2 }}>
      {message && open && (
        <Alert
        //Lagt till clearMessage
          onClose={(clearMessage) => {
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
       {/*  <ProductItemLarge product={product} /> */}
     {
     // RAD 64 - 75
        <Box>
          <ProductItemLarge product={product} onRatingAdd={onRatingAdd} />
          <Typography variant="h3">Ratings</Typography>
          {product.ratings && (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {product.ratings.map((rating, i) => (
                <RatingList key={`rating_${i}`} rating={rating} />
              ))}
            </List>
          )}
        </Box>
        }
      
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