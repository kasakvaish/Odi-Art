import React from "react";
import "./text.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

const Text = () => {
    return ( 
    <div className="container">
        <div className="Text">
            <h1 className = "sub-Text-1"> Odi Art Center </h1> 
            <p className="para-1">
                Nestling on the banks of Chilika Lake in Odisha, a state in eastern India, the Odi Art Centre is developed by‘ Society
                for Development of Rural Literature’, a registered, non - profit, cultural Society.The centre, which has built Purvasha Folk and Tribal Art Museum with the financial support from Ministry of Culture, Government of India and Department of Tourism & Culture, Government of Odisha, showcases the rich traditions of folk and tribal arts of India.Chilika, brackish water lagoon, has remained a source of inspiration
                for the domestic and foreign tourists, poets, writers and creative artistes and ODI ART Centre was added as an incubation centre to its cultural and ethnic heritage.Odi Art Centre, an ethnic art complex, well decorated with collected art objects and surrounded by nine small amphitheatres and gazebos
                for folk performances, spread over five acres of land has:
            </p>
            <a className="button" href="" ><Button variant="contained">Read More</Button></a>
        </div>


        <div className="Photo">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BV9hEDwRHSZu7qHG11XzxQHaD4%26pid%3DApi&f=1" alt="" />
        </div>

        <div className="Words">
            <h1>Why Visit Odi-Art Centre</h1>
            <h6>The Culture We Provide</h6>
        </div>

        <div className="cards-2">
            <Card className="cardSpace" sx={{ maxWidth: 345 }}>
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            <Card className="cardSpace" sx={{ maxWidth: 345 }}>
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            <Card className="cardSpace" sx={{ maxWidth: 345 }}>
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>


            <Card className="cardSpace" sx={{ maxWidth: 345 }}>
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </div>

    </div>
    );
};

export default Text;