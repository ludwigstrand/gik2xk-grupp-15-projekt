import { Link, Outlet } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@mui/material';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h1' sx={{ flexGrow: 1}}>
          <Link to="/">Home</Link>
          </Typography>
          <Button variant="contained" color='inherit' >
            <Link to="/products/new">Lägg till Produkt</Link>
          </Button>
          <Link to="/products/add">
            <ShoppingCartIcon fontSize='large' sx={{ ml: 5, mr: 3 }}/>
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
