import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Style = {
    card:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
}

export default function MultiActionAreaCard() {
  return (
    <Card style={Style.card}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">了解更多</Button>
        </CardActions>
    </Card>
  );
}