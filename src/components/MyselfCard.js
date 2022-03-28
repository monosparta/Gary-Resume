import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HeaderCard from  '../img/header_card_img.jpg'


const Style = {
    card:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        height: 150,
        width: 150,
        marginTop:-10,
    },
    
}

export default function MediaCard() {

    return (
        <Card style={Style.card}>
        <CardMedia
            component="img"
            height="140"
            image={HeaderCard}
            alt="header_card"
        />
        <Avatar 
            sx={Style.avatar} 
            src={'https://i.pravatar.cc/300'} 
            alt="me"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                鈕臻昱
            </Typography>
            <Typography variant="body2" color="text.secondary">
                一個不是在製造bug，就是在製造更多bugs的工程師。
            </Typography>
        </CardContent>
        </Card>
    );
}