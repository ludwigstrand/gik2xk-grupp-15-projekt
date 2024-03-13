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
import { Box } from "@mui/material";

const productDescription = [
  {
    id: 1,
    name: "Ananas",
    description: "This is product 1",
    price: 100,
    imageUrl: ananas,
  },
  {
    id: 2,
    name: "Apelsin",
    description: "This is product 2",
    price: 200,
    imageUrl: apelsin,
  },
  {
    id: 3,
    name: "Äpple",
    description: "This is product 3",
    price: 300,
    imageUrl: äpple,
  },
  {
    id: 4,
    name: "Avocado",
    description: "This is product 4",
    price: 400,
    imageUrl: avocado,
  },
  {
    id: 5,
    name: "Banan",
    description: "This is product 5",
    price: 500,
    imageUrl: banan,
  },
  {
    id: 6,
    name: "Blåbär",
    description: "This is product 6",
    price: 600,
    imageUrl: blåbär,
  },
  {
    id: 7,
    name: "Citron",
    description: "This is product 7",
    price: 700,
    imageUrl: citron,
  },
  {
    id: 8,
    name: "Drakfrukt",
    description: "This is product 8",
    price: 800,
    imageUrl: drakfrukt,
  },
];

function ProductList() {
  return (
    <>
      <Box display={"flex"} flexWrap={"wrap"} gap={5}>
        {productDescription.map((icon) => (
          <ProductItemSmall
            key={icon.id}
            name={icon.name}
            description={icon.description}
            price={icon.price}
            imageUrl={icon.imageUrl}
          />
        ))}
      </Box>
      <div>
        {productDescription.map((icon) => (
          <ProductItemLarge
            key={icon.id}
            name={icon.name}
            description={icon.description}
            price={icon.price}
            imageUrl={icon.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
