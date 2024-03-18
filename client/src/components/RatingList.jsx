import { Box, ListItem, ListItemText, Typography, Rating } from '@mui/material';
import { grey } from '@mui/material/colors';
import { toDateTimeString } from '../common/formatHelpers';


function RatingList({ rating }) {

  return (
    <ListItem sx={{ mb: 1, borderBottom: `1px solid ${grey[300]}` }}>
      <ListItemText
        primary={
          <Typography
            color="text.secondary"
            component="p"
            fontWeight="bold"
            variant="body1">
            {rating.user} säger:
          </Typography>
        }
        secondary={
          <Box>
            <Typography variant="body2">
              {toDateTimeString(rating.createdAt)}
            </Typography>
            <Rating
          name="half-rating"
          value={rating.rating}
          onChange={(event, newValue) => {
            setValue(newValue);
            onRatingAdd(newValue);
          }}
          precision={0.5}
          readOnly
          sx={{ ml: 2 }}
          
        />
          </Box>
        }></ListItemText>
    </ListItem>
  );
}


{/* <Rating
          name="half-rating"
          value={
            avgRating(product)
          }
          precision={0.5}
          readOnly
          sx={{ ml: 2 }}
        /> */}
export default RatingList;