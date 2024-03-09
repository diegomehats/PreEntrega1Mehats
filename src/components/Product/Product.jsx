import { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  CardActionArea, 
  Box, 
  Container, 
  Grid,
  Button
} from '@mui/material';
import Modal from '@mui/material/Modal';
import useCafe from '../../hooks/useCafe';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.default',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Product = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
  const { handleAgregarPedido } = useCafe();

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
        <Box sx={style}>
          <Grid marginTop={2} container justifyContent="center" alignItems="center">
            <CardMedia  
              component="img"   
              image={`../../../public/${producto.image}.jpg`}  
              sx={{
                flexGrow: 1,
                margin: 2,
                objectFit: { xs: 'contain', md: 'cover' },
                height: { xs: '100px', md: '400px' }
              }} 
              alt="imagen producto" 
            />
            <Typography color="text.disabled" textTransform="uppercase" variant="h6" component="h2">
              {producto.title}
            </Typography>
            <Typography color="text.disabled" sx={{ mt: 2 }}>
              {producto.description}
            </Typography>
            <Grid item marginY={1}>
              <Typography color="text.disabled" fontWeight="bold" fontSize="30px">
                ${producto.price * cantidad}
              </Typography>
            </Grid>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <button 
                  type="button"
                  onClick={() => {
                    if (cantidad <= 1) return;
                    setCantidad(cantidad - 1);
                  }}
                >
                  -
                </button>
              </Grid>
              <Grid item>
                <Typography color="text.disabled">
                  {cantidad}
                </Typography>
              </Grid>
              <Grid item>
                <button 
                  type="button"
                  onClick={() => {
                    if (cantidad >= producto.stock) return;
                    setCantidad(cantidad + 1);
                  }}
                >
                  +
                </button>
              </Grid>
            </Grid>
            <Grid container marginTop={1} justifyContent="space-between">
              <Grid item marginY={1}>
                <Typography color="text.disabled">
                  stock: {producto.stock - cantidad}
                </Typography>
              </Grid>
              <Grid item>
                <Button 
                  onClick={() => {
                    handleAgregarPedido({...producto, cantidad});
                    handleClose();
                  }}
                >
                  Agregar pedido
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Container> 
        <Card sx={{ bgcolor: 'secondary.main', transition: '0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
          <CardActionArea  
            sx={{ 
              display: { xs: 'flex', md: 'grid' }, 
              height: { xs: '100px', md: 'auto' }, 
              alignItems: 'center', 
              padding: 2, 
              justifyItems: 'center' 
            }}
          >
            <CardMedia  
              component="img" 
              image={`../../../public/${producto.image}.jpg`} 
              sx={{ 
                flexGrow: 1,  
                margin: 2,
                objectFit: { xs: 'contain', md: 'cover' }, 
                borderRadius: { xs: '20%', md: '10%' }, 
                maxWidth: { xs: '70px', md: '90%' }, 
                height: { xs: '100px', md: '300px' } 
              }} 
              alt="imagen producto" 
            />
            <CardContent sx={{ height: 'auto' }}>
              <Typography color="text.disabled" fontWeight="bold" textTransform="uppercase" sx={{ fontSize: { xs: 'large', md: 'x-large' } }}>
                {producto.title}
              </Typography> 
              <Typography component="p" color="text.disabled" sx={{ fontSize: { xs: 'xx-small', sm: 'xsmal', md: 'small' } }}>
                {producto.description}
              </Typography>
              <Typography marginTop={1} align="center" color="text.disabled" fontWeight="bold" textTransform="uppercase" sx={{ fontSize: { xs: 'large', md: 'x-large' } }}>
                ${producto.price}
              </Typography> 
            </CardContent>
            <CardActions>
              <Button onClick={handleOpen} sx={{ bgcolor: 'info.main', '&:hover': { bgcolor: 'info.dark' } }} variant="contained">
                Comprar
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Container>
      
    </>
  )
}

export default Product;
