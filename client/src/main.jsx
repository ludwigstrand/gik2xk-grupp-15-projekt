import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductEdit from './views/ProductEdit.jsx';
import Cart from './views/Cart.jsx';
import Home from './views/Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  lime, 
  teal, 
  deepOrange,
  green,
  grey,
  orange,
  purple,
  red,
} from '@mui/material/colors';
import ProductDetail from './views/ProductDetail.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[50], 
      paper: grey[100],
    },
    primary: {
      main: green[600], 
    },
    secondary: {
      main: lime[700], 
    },
    success: {
      main: green[500], 
    },
    admin: {
      main: teal[500],
    },
    error: {
      main: deepOrange[800], 
    },
    warning: {
      main: lime[800], 
    },
    info: {
      main: green[300], 
    },
    text: {
      primary: grey[900], 
      secondary: green[800], 
    }
  },
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'Angkor', 
      fontSize: '3rem',
      marginBlock: '1.6rem',
      color: green[900], 
    },
    h2: {
      fontSize: '2.1rem',
      marginBottom: '.7em',
      color: lime[900], 
    },
    h3: {
      fontSize: '1.6rem',
      color: teal[700], 
    },
    h4: {
      fontSize: '1.3rem',
      color: lime[600], 
    },
    body1: { color: grey[800] }, 
    body2: { color: grey[900] }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
         path: '/products/:id/edit',
         element: <ProductEdit />
       },
      {
        path: '/products/:id',
        element: <ProductDetail />
      },
      {
         path: '/products/new',
         element: <ProductEdit />
       },
      {
        path: '/carts/:id',
        element: <Cart />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
