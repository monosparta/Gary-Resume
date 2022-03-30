import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactCardFlip from 'react-card-flip';


const Style = {
  cardfront:{
    height:250,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardback:{
    height:250,
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
      <Card style={Style.cardfront} onMouseOver={() => setFlipped((prev) => !prev)}>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt="time card img"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.motto}
          </Typography>
        </CardContent>
      </Card>
      <Card style={Style.cardback} onMouseOut={() => setFlipped((prev) => !prev)}>
        <CardContent>
          <Typography variant="body2" align="left" color="text.secondary">
            {props.introduce}
          </Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
}