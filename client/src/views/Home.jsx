import { useLocation } from 'react-router-dom';
// import PostList from '../components/PostList';
// import TagList from '../components/TagList';
// import UserList from '../components/UserList';
import { Alert, Grid, Paper, Typography } from '@mui/material';
import ProductList from '../components/ProductList';
import { useState } from 'react';

function Home() {
  const location = useLocation();
  const message = location.state?.message;
  const [open, setOpen] = useState(true);

  function clearMessage() {
    window.history.replaceState({}, '');
  }
  return (
    <>
      <ProductList />
    </>
  );
}

export default Home;
