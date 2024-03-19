import { useLocation } from "react-router-dom";
// import PostList from '../components/PostList';
// import TagList from '../components/TagList';
// import UserList from '../components/UserList';
import { Alert, Box, Paper, Typography } from "@mui/material";
import ProductList from "../components/ProductList";
import { useState } from "react";

function Home() {
  const location = useLocation();
  const message = location.state?.message;
  const [open, setOpen] = useState(true);

  function clearMessage() {
    window.history.replaceState({}, "");
  }
  
  return (
    <>
      <Paper elevation={3} sx={{ p: 2, mt: 4, borderRadius: 2 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" sx={{}}>
            Frukt och grönt
          </Typography>
          
        </Box>
        <ProductList />
      </Paper>
    </>
  );
}

export default Home;
