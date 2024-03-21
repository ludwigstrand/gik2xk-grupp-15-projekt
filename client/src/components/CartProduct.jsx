import { Avatar, Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeProductFromCart } from "../services/CartService";
import { Link } from "react-router-dom";

function CartProduct({ product, refreshCart }) {
  return (
    <TableRow>
      <TableCell align="right" sx={{ width: "10%" }}>
        <Link to={`/products/${product.productId}`}>
          <Avatar
            src={product.imageUrl}
            variant="rounded"
            sx={{ width: 100, height: 100 }}
          />
        </Link>
      </TableCell>
      <TableCell
        align="left"
        key={product.productId}
        sx={{ mr: 1, width: "25%" }}
      >
        <Link to={`/products/${product.productId}`}>{product.title}</Link>
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
              .catch((error) =>
                console.error("Error removing product from cart:", error)
              );
          }}
          color="error"
        ></Button>
      </TableCell>
    </TableRow>
  );
}

export default CartProduct;
