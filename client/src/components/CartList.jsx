import ProductItemSmall from "./ProductItemSmall";
import ProductItemLarge from "./ProductItemLarge";
import { useEffect, useState } from "react";
import ananas from "../assets/ananas.jpg";
import apelsin from "../assets/apelsin.jpg";
import äpple from "../assets/äpple.jpg";
import avocado from "../assets/avocado.jpg";
import banan from "../assets/banan.jpg";
import blåbär from "../assets/blåbär.jpg";
import citron from "../assets/citron.jpg";
import drakfrukt from "../assets/drakfrukt.jpg";
import {
  Box,
  List,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { getAll } from "../services/ProductService";
import CartProduct from "./CartProduct";
import { getOne, removeProductFromCart } from "../services/CartService";

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
  };
  
  


  let totalPrice = 0;

  if (cart.products?.length > 0) {
    totalPrice = cart.products.reduce((acc, product) => acc + product.price, 0);
  }

 

  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Varukorg</TableCell>
            <TableCell align="left">Produkt</TableCell>
            <TableCell align="right">Antal</TableCell>
            <TableCell align="right">Pris</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products?.length > 0 ? (
            cart.products.map((products) => (
              <CartProduct key={products.id} product={products} />
            ))
          ) : (
            <h3>Kunde inte hämta inlägg</h3>
          )}
          <TableRow>
            <TableCell colSpan={4} align="right">
              Totalt pris: {totalPrice} kr
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );

          }
export default CartList;
