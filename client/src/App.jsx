import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Badge,
} from "@mui/material";
import ProductList from "./components/ProductList";
import { getOne } from "./services/CartService";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCarts] = useState({});

  useEffect(() => {
    getOne(1).then((fetchedCart) => setCarts(fetchedCart));
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <Button variant="contained" color="inherit">
            <Link to="/products/new">Lägg till Produkt</Link>
          </Button>
          <Link to={`/carts/${cart.cartId}`}>
            <Badge badgeContent={4} color="info" sx={{ mr: 3 }}>
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
