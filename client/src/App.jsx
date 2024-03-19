import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Badge,
} from "@mui/material";
import { getOne } from "./services/CartService";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    updateCart();
  }, []);

  function updateCart () {
    getOne(1).then((fetchedCart) => setCart(fetchedCart));
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1 }}>
            <Link to="/">Hem</Link>
          </Typography>
          <Button variant="contained" color="admin">
            <Link to="/products/new">Lägg till Produkt</Link>
          </Button>
          <Link to={`/carts/${cart.cartId}`}>
            <Badge badgeContent={cart.products?.reduce((total, product) => total + product.amount, 0) || null} color="info" sx={{ mr: 3 }}>
              <ShoppingCartIcon fontSize="large" sx={{ ml: 5 }} />
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }} maxWidth="xl" component="main">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
