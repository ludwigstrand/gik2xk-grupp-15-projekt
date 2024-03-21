import { Box, ListItem, ListItemText, Typography, Rating } from '@mui/material';
import { grey } from '@mui/material/colors';
import { toDateTimeString } from '../common/formatHelpers';

function RatingList({ rating }) {

  const randomUser = [
    {id: 1,
      firstName: 'Hanna',
      lastName: 'Adamsson',
    },
    {
    id: 2,
    firstName: 'Ludwig',
    lastName: 'Strand',
  },
  {id:3, firstName: 'William', lastName:'Olsson'},

  {id: 4,
    firstName: 'Victor',
    lastName: 'Kajgård',}

  ];

  return (
    <ListItem sx={{ mb: 1, borderBottom: `1px solid ${grey[300]}` }}>
      <ListItemText
        primary={
          <Typography
            color="text.secondary"
            component="p"
            fontWeight="bold"
            variant="body1">
            {randomUser[Math.floor(Math.random() * randomUser.length)].firstName} gav: 
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
        }>
      </ListItemText>
    </ListItem>
  );
}
export default RatingList;