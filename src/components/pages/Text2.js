import React from "react";
import './Text2.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
    Button,
    CardActionArea,
    CardActions
} from '@mui/material';

const Text2 = () => {
        return (
            
        <>
                <div className="Heading" >
                    <h1 className="text2"> How to <br/> reach us </h1>  
                    <h6 className="para2"> Reaching us made <br/> easier </h6>  
                </div >

            <div className = "Cards-3">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of soulmate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of soulmate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of soulmate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className="Heading-2" >
                    <h1 className="text3"> Nearby tourist attractions </h1>  
                    <h6 className="para3"> Without which your trip is incomplete </h6>  
                </div >
                    
        </>

    );
};


export default Text2;