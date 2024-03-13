import { Link, Outlet } from 'react-router-dom';
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
          <Button color='inherit'>
            <Link to="/products/new">Lägg Produkt</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }} maxWidth="xl" component="main">
      <Outlet />
      </Container>
    </>
  );
}

export default App;
