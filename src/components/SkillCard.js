import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function SkillCard(props) {
  return (
    <Card sx={{ width: '80%' }}>
      <Avatar 
        src={props.img}
        alt="skill_img"
      />
      <CardContent alignItems="center">
        <Typography variant="body2" color="text.secondary">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}