import { Button, Rating, TextField } from "@mui/material";
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


// <form>
//       <div>
//         <TextField
//           fullWidth
//           value={comment.title}
//           onChange={(e) => setComment({ ...comment, title: e.target.value })}
//           label="Rubrik"
//           name="title"
//           id="title"
//           margin="normal"
//         />
//       </div>
//       <div>
//         <TextField
//           fullWidth
//           multiline
//           minRows={3}
//           value={comment.body}
//           onChange={(e) => setComment({ ...comment, body: e.target.value })}
//           label="Innehåll"
//           name="body"
//           id="body"
//         />
//       </div>
//       <Button onClick={() => onSave(comment)}>Skicka kommentar</Button>
//     </form>