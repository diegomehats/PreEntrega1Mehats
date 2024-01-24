import { AppBar, Container, Typography, Grid } from "@mui/material"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar"
import Product from "./components/Product/Product";


const productos = [
  {
    image: "../src/assets/cafe_01.jpg", title:"cafe 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur dicta architecto tempore, numquam odit quia dolorem repellat unde temporibus praesentium cupiditate ullam? ", precio:"$1500"
  },
  {
    image: "../src/assets/cafe_02.jpg",  title:"cafe 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur dicta architecto tempore, numquam odit quia dolorem repellat unde temporibus praesentium cupiditate ullam? ", precio:"$1600"
  },
  {
    image: "../src/assets/cafe_03.jpg", title:"cafe 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur dicta architecto tempore, numquam odit quia dolorem repellat unde temporibus praesentium cupiditate ullam? ", precio:"$1700"
  }
  
]




function App() {
 

  return (
 
 
 <>
    
    <NavBar/>
    
   <Container sx={{marginTop:10, marginX:"auto"}}>  
   
   <Typography variant="h4" align="center">
      <ItemListContainer greeting= "bienvenidos a mi tienda" />
      
      </Typography>
      </Container>
      <Container sx={{mt:3}}>
        <Grid container spacing={2} >
          {
          productos.map(producto => (
            <Grid item xs={4} justifyContent="center">      
                 <Product producto = {producto}/>
           </Grid>

          ))}
         
            
         </Grid>

      </Container>
    

    
    
   
 </>
  
  ) 
}

export default App
