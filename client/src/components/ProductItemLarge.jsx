function ProductItemLarge( props ) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.imageUrl} alt="Bild" />
      <p>{props.price} kr</p>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductItemLarge;
