import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import HeaderCard from  '../img/header_card_img.jpg'
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
    parentFlexRight: {
        display: "flex",
        justifyContent: "flex-end"
    }
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export default function MediaCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {setExpanded(!expanded);};

    return (
        <Card style={Style.card}>
            <CardMedia
                component="img"
                height="150"
                image={HeaderCard}
                alt="header_card"
            />
            <Avatar 
                sx={Style.avatar} 
                src={"https://i.pravatar.cc/300"} 
                alt="me"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    鈕臻昱
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    一個不是在製造bug，就是在製造更多bugs的工程師。
                </Typography>
                <Box mt={2} textAlign="right">
                    <Box textAlign="left">
                        <Link href="tel:+886-919612283" underline="none">
                            <Typography variant="body2">
                                <LocalPhoneIcon sx={{ fontSize: 25 }}/> 
                                0919-612283
                            </Typography>
                        </Link>
                    </Box>
                    <Box textAlign="left">
                        <Link href="mailto:garyopen1876@gmail.com" underline="none">
                            <Typography variant="body2">
                                <EmailIcon sx={{ fontSize: 25 }}/> 
                                garyopen1876@gmail.com
                            </Typography>
                        </Link>
                    </Box>
                    <Box textAlign="left" onClick={() => window.open('https://github.com/garyopen1876')}>
                        <Link href="#" underline="none">
                            <Typography variant="body2">
                                <GitHubIcon sx={{ fontSize: 25 }}/> 
                                https://github.com/garyopen1876
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </CardContent>
            <CardActions disableSpacing >
                詳細自傳
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                    stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and
                    peppers, and cook without stirring, until most of the liquid is absorbed,
                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                    mussels, tucking them down into the rice, and cook again without
                    stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
    );
}