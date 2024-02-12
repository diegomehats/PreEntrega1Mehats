import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button,CardActionArea, Container} from "@mui/material"





const Product = ({producto}) => {
  return (
    
      <Container> 
        
        <Card
            sx={{bgcolor : 'secondary.main',
              transition: "0.2s",
              "&:hover":{ 
                transform: "scale(1.05)",
              },
            }}
        
        >

          
          <CardActionArea  sx={{display: {xs:"flex",md:"grid"},height:{xs:"100px", md:"auto"} , alignItems:"center",padding:2, justifyItems:"center"}}>
              
                  <CardMedia  component="img" image={producto.image} sx={{ flexGrow:1,  margin:2,objectFit:{xs:"contain", md:"cover"}, borderRadius:{xs:"20%", md:"10%"}, maxWidth:{xs:"70px", md:"90%"}, height:{xs:"100px", md:"300px"} }} alt="imagen producto" />
              
                
              
                  <CardContent sx={{height:"auto"}}>
                            <Typography color='text.disabled'fontWeight="bold" textTransform="uppercase" sx={{fontSize:{xs:"large", md:"x-large"}}} >{producto.title}</Typography> 
                            <Typography component="p"  color="text.disabled" sx={{fontSize:{xs:"xx-small", sm:"xsmal", md:"small"}}}>
                                {producto.description}
                            </Typography>
                  </CardContent>
              

              
                  <CardActions>
                        <Button href={`/item/#${producto.id}`} sx={{bgcolor:'info.main', ":hover":{bgcolor:'info.dark'}}} variant="contained" >Comprar</Button>
                    </CardActions>
              

          
                    
                   
          </CardActionArea>


          
              
        </Card>
        </Container>
    
  )
}

export default Product