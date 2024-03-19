import { useEffect, useState } from "react";
import { getOne } from "../services/CartService";
import CartList from "../components/CartList";
import { Box } from "@mui/material";

function Cart() {
  return (
    <Box>
      <CartList />
    </Box>
  );
}

export default Cart;
