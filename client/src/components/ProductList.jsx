import ProductItemSmall from "./ProductItemSmall";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { getAll } from "../services/ProductService";

function ProductList({ pathname }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => {
      setProducts(products);
    });
  }, [pathname]);
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={5}>
    {products?.length > 0 ? (
     products
        .map((products) => (
            <ProductItemSmall key={products.id} product={products}/>      
        ))
        
    ) : (
      <h3>Kunde inte hämta produkter</h3>
    )} </Box>
  );
}

export default ProductList;
