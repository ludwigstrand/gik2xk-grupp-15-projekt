import ananas from "../assets/ananas.jpg";
import apelsin from "../assets/apelsin.jpg";
import äpple from "../assets/äpple.jpg";
import avocado from "../assets/avocado.jpg";
import banan from "../assets/banan.jpg";
import blåbär from "../assets/blåbär.jpg";
import citron from "../assets/citron.jpg";
import drakfrukt from "../assets/drakfrukt.jpg";

function ProductItemLarge(  { product }  ) {
  const productDescription = [
    {
      id: 1,
      name: "Ananas",
      description: "This is product 1",
      price: 100,
      rating: 5,
      imageUrl: ananas,
    },
    {
      id: 2,
      name: "Apelsin",
      description: "This is product 2",
      price: 200,
      rating: 3,
      imageUrl: apelsin,
    },
    {
      id: 3,
      name: "Äpple",
      description: "This is product 3",
      price: 300,
      rating: 4,
      imageUrl: äpple,
    },
    {
      id: 4,
      name: "Avocado",
      description: "This is product 4",
      price: 400,
      rating: 5,
      imageUrl: avocado,
    },
    {
      id: 5,
      name: "Banan",
      description: "This is product 5",
      price: 500,
      rating: 4,
      imageUrl: banan,
    },
    {
      id: 6,
      name: "Blåbär",
      description: "This is product 6",
      price: 600,
      rating: 1,
      imageUrl: blåbär,
    },
    {
      id: 7,
      name: "Citron",
      description: "This is product 7",
      price: 700,
      rating: 4,
      imageUrl: citron,
    },
    {
      id: 8,
      name: "Drakfrukt",
      description: "This is product 8",
      price: 800,
      rating: 2,
      imageUrl: drakfrukt,
    },
  ];
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt="Bild" />
      <p>{product.price} kr</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItemLarge;
