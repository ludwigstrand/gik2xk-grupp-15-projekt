import { useLocation } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import ProductList from "../components/ProductList";
import { useState } from "react";

function Home() {
  const location = useLocation();
 
  return (
      <Paper elevation={3} sx={{ p: 2, mt: 4, borderRadius: 2 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" sx={{}}>
            Välkommen till frukt och grönsaks-shoppen!
          </Typography>
        </Box>
        <ProductList />
      </Paper>
  );
}

export default Home;
