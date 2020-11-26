import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ItemCard({restaurantId, item, addCartItem}) {

    return (
        <Card className="menuItem">
            <CardActionArea>
                {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>{addCartItem(item)}}>
                    Add to cart
                </Button>
            </CardActions>
        </Card> 
    );
}
