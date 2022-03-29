import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Style = {
  card:{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
  },
}

export default function TimeCard(props) {

  return (
    <Card style={Style.card}>
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
  );
}