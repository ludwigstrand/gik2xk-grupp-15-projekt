import { Box, Paper, Typography } from "@mui/material";
import ProductList from "../components/ProductList";


function Home() {

 
  return (
      <Paper elevation={3} sx={{ p: 2, mt: 4, borderRadius: 2 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2" sx={{textShadow: '1px 1px 2px black'}} >
            Välkommen till frukt- och grönsaksshoppen!
          </Typography>
        </Box>
        <ProductList />
      </Paper>
  );
}

export default Home;
