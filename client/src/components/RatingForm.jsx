import { Button, Rating } from "@mui/material";
import { useState } from "react";

function RatingForm({ onSave }) {
  const [rating, setRating] = useState({rating: ''});

  return (
    <>
      <Rating
        name="simple-controlled"
        value={rating.rating}
        onChange={(event, newValue) => {
          
          setRating(rating, value);
        }}
      />
      <Button onClick={() => onSave(rating)}>Skicka kommentar</Button>
    </>
  );
}

export default RatingForm;