import {
  Avatar,
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";



function CartProduct({ product }) {
  return (
    <>

        <TableRow>
          <TableCell align="right" sx={{width:"10%"}}>
            <Avatar
              alt="Remy Sharp"
              src={product.imageUrl}
              variant="rounded"
              sx={{ width: 100, height: 100 }}
            />
          </TableCell>
          <TableCell align="left" key={product.id} sx={{ mr: 1, width: "25%" }}>{product.title}</TableCell>
          <TableCell align="right" sx={{ mr: 1, width: "40%" }}>{product.amount} st</TableCell>
          <TableCell align="right" sx={{width:"25%"}}>{product.price} kr</TableCell>
        </TableRow>
    
    </>
  );
}

export default CartProduct;
