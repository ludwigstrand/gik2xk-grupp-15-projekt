import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getOne } from "../services/CartService";
import { removeProductFromCart } from "../services/CartService";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Container,
  Button,
  Divider,
  Box
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart() {
  const [cart, setCart] = useState({ products: [] });
  const { user } = useAuth();

  useEffect(() => {
    getOne(user.id).then((carts) => {
    
      setCart(carts);
    });
  }, [user.id]);

  let totalPrice = cart.products?.reduce((acc, product) => acc + product.price, 0) || 0;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Din kundkorg
      </Typography>
      <List key={2}>
        {cart.products.length > 0 ? (
          cart.products.map((product) => (
            <div key={product.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    <ShoppingCartIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Typography >
                        Antal: {product.amount}
                        </Typography>
                        <Typography >
                        Styckpris: {product.price / product.amount} kr
                        </Typography>
                        <Typography >
                        Pris: {product.price} kr
                        </Typography>
                      </Typography>
                        <Button
                            variant="contained"
                            startIcon={<ShoppingCartIcon />}
                            color="secondary"
                            onClick = {() => removeProductFromCart(product.productId, cart.cartId)}
                        />
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))
        ) : (
          <Typography variant="subtitle1" component="p">
            Din kundkorg är tom.
          </Typography>
        )}
      </List>
      {cart.products.length > 0 && (
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6">
            Totalt pris: {totalPrice} kr
          </Typography>
          <Button variant="contained" startIcon={<ShoppingCartIcon />} color="primary">
            Till kassan
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default Cart;
