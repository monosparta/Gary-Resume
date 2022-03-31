import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Project1Img from '../img/project1.png';

const Style = {
    card:{
        width: '100%',
        minWidth: 150,
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
            alt="project img"
            height="140"
            image={Project1Img}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">了解更多</Button>
        </CardActions>
    </Card>
  );
}