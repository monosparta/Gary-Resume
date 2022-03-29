import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactCardFlip from 'react-card-flip';

const Style = {
  card:{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
}

export default function TimeCard(props) {

  const [isFlipped, setFlipped] = React.useState(false);
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Card style={Style.card} onClick={() => setFlipped((prev) => !prev)}>
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="time card img"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.introduce}
          </Typography>
        </CardContent>
      </Card>
      <Card style={Style.card} onClick={() => setFlipped((prev) => !prev)}>
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt="time card img"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.introduce}
          </Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
}