import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CartProduct from "./CartProduct";
import { getOne } from "../services/CartService";

function CartList() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    getOne(1).then((carts) => {
      setCart(carts);
    });
  }, []);

  function renderCart() {
    getOne(1).then((carts) => {
      setCart(carts);
    });
  }

  let totalPrice = 0;

  if (cart.products?.length > 0) {
    totalPrice = cart.products.reduce((acc, product) => acc + product.price, 0);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2>Varukorg</h2></TableCell>
            <TableCell align="left">Produkt</TableCell>
            <TableCell align="right">Antal</TableCell>
            <TableCell align="right">Pris</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products?.length > 0 ? (
            cart.products.map((products) => (
              <CartProduct
                key={products.id}
                product={products}
                refreshCart={renderCart}
              />
            ))
          ) : (
            <TableRow>
              <TableCell><h3>Din kundvagn är tom</h3></TableCell>
            </TableRow> 
          )}
          <TableRow>
            <TableCell colSpan={4} align="right">
              {cart.products?.length > 0 ? `Totalt pris: ${totalPrice} kr`: null}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CartList;
