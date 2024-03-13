import ProductItemSmall from "./ProductItemSmall";
import { useEffect, useState } from "react";
import ananas from "../assets/ananas.jpg";
import apelsin from "../assets/apelsin.jpg";
import äpple from "../assets/äpple.jpg";

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
];

function ProductList() {
  return (
    <div>
      {productDescription.map((icon) => (
        <ProductItemSmall
          key={icon.id}
          name={icon.name}
          description={icon.description}
          price={icon.price}
          imageUrl={icon.imageUrl}
        />
      ))}
    </div>
  );
}

export default ProductList;
