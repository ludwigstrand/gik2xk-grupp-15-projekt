import {
  Avatar,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getOne, removeProductFromCart } from "../services/CartService";
import { useEffect, useState } from "react";

function CartProduct({ product, refreshCart }) {

  return (
    <>
      <TableRow>
        <TableCell align="right" sx={{ width: "10%" }}>
          <Avatar
            src={product.imageUrl}
            variant="rounded"
            sx={{ width: 100, height: 100 }}
          />
        </TableCell>
        <TableCell align="left" key={product.id} sx={{ mr: 1, width: "25%" }}>
          {product.title}
        </TableCell>
        <TableCell align="right" sx={{ mr: 1, width: "40%" }}>
          {product.amount} st
        </TableCell>
        <TableCell align="right" sx={{ width: "25%" }}>
          {product.price} kr
        </TableCell>
        <TableCell align="right" sx={{ width: "5%" }}>
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => {
              removeProductFromCart(product.productId, 1)
                .then(refreshCart) 
                .catch((error) => console.error("Error removing product from cart:", error));
            }}
            color="error"
          ></Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default CartProduct;