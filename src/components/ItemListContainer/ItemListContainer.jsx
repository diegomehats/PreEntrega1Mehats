import {Box, Grid, Typography} from '@mui/material'
import Product from '../Product/Product'
import useCafe from '../../hooks/useCafe';



const ItemListContainer = () => {
  
const { productos, categoriaId } = useCafe();




  
  return (
    <>
        
              <Box flex alignContent="center" justifyContent="center">
                <Typography align='center' marginTop={4} color="text.disabled" textTransform="uppercase" fontWeight="bold" fontSize="30px"  >{categoriaId} </Typography> 
              </Box>
                 <Grid container spacing={4}  >
                    {    
                        productos.map(producto => ( 
                        <Grid item md={4} mt={4}key={producto.title}>  
                          
                            <Product
                            producto = {producto}
                            />
                        </Grid>
                        ))}      
                  </Grid>   
    </>
  
  )
}

export default ItemListContainer