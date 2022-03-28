import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="50"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="django"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Django
        </Typography>
        <Typography variant="body2" color="text.secondary">
          最愛使用
        </Typography>
      </CardContent>
    </Card>
  );
}