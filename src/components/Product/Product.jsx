import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button,CardActionArea, Grid} from "@mui/material"

const Product = ({producto}) => {
  return (
    <Card 
        sx={{
          transition: "0.2s",
          "&:hover":{
            transform: "scale(1.05)",
          },

        }}
    
    >
        <CardActionArea>
                <CardMedia component="img" image={producto.image} width="200"  height= "300" sx={{objectFit:"contain"}} alt='description'/>
                <CardContent>
                    <Typography variant='h5' color="black">{producto.title}</Typography>
                    <Typography component="p" variant='body2' color="black">
                        {producto.description}
                    </Typography>
                </CardContent>
        </CardActionArea>


        <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
            <CardActions>
                <Button variant="contained" >Comprar</Button>
            </CardActions>
            </Grid>
          
    </Card>
  )
}

export default Product