import {Card, CardMedia, CardContent, Typography, CardActions, Button,CardActionArea, Box, Container, Grid} from "@mui/material"

import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};





const Product = ({producto}) => {

  const [cantidad, setCantidad]= useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  return (
   


      <Container> 
       
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      > 
        
        <Box sx={style} >
        <CardMedia  component="img"  image={producto.image} sx={{flexGrow:1,  margin:2,objectFit:{xs:"contain", md:"cover"}, maxWidth:{xs:"70px", md:"90%"}, height:{xs:"100px", md:"400px"} }} alt="imagen producto" />
          <Typography textTransform="uppercase" id="modal-modal-title" variant="h6" component="h2">
           {producto.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {producto.description}
          </Typography>
          <Grid marginTop={2} container spacing={2}alignItems="center"  >
              <Grid item>
                    <button 
                        type="button"
                        onClick={() => {
                            if(cantidad<= 1) return;
                            setCantidad(cantidad - 1)
                        }}
                        
                    >
                        -
                    </button>
                    </Grid>
                    <Grid item>
                        <p >
                             {cantidad}
                        </p>
                        </Grid>
                    <Grid item>
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad>= 10) return;
                            setCantidad(cantidad + 1)
                        }}
                       
                    >
                      +

                    </button>
                    </Grid>
            </Grid>
        </Box>
        
      </Modal>
    
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
                        <Button onClick={handleOpen}  sx={{bgcolor:'info.main', ":hover":{bgcolor:'info.dark'}}} variant="contained" >Comprar</Button>
                    </CardActions>
              
                   
          </CardActionArea>
       
        </Card>
        </Container>
    
  )
}

export default Product