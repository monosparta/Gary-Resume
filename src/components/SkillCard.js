import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DjangoImg from '../img/django.png';

export default function SkillCard() {
  return (
    <Card sx={{ maxWidth: '80%' }}>
      <CardMedia
        component="img"
        height="50"
        image={DjangoImg}
        alt="skill_img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Django
        </Typography>
      </CardContent>
    </Card>
  );
}