import {Box, Grid, Typography} from '@mui/material'
import Product from '../Product/Product'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const productos = [
  {
   id:1 , image: "../src/assets/cafe_01.jpg", title:"cafe 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"cafeteria", precio:"$1500"
  },
  {
    id:2 ,  image: "../src/assets/cafe_02.jpg",  title:"cafe 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"cafeteria", precio:"$1600"
  },
  {
     id:3 , image: "../src/assets/cafe_03.jpg", title:"cafe 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"cafeteria", precio:"$1700"
  },
  {
     id:4 , image: "../src/assets/cafe_04.jpg", title:"cafe 04", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"cafeteria", precio:"$1700"
  },
  {
     id:5 , image: "../src/assets/cafe_05.jpg", title:"cafe 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"cafeteria", precio:"$1700"
  },
  {
     id:6 , image: "../src/assets/cafe_06.jpg", title:"cafe 06", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"cafeteria", precio:"$1700"
  },
  {
     id:7 , image: "../src/assets/pastel_01.jpg", title:"pastel 01", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"pasteleria", precio:"$1700"
  },
  {
     id:8 , image: "../src/assets/pastel_02.jpg", title:"pastel 02", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"pasteleria", precio:"$1700"
  },
  {
     id:9 , image: "../src/assets/pastel_03.jpg", title:"pastel 03", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"pasteleria", precio:"$1700"
  },
  {
    id:10 ,  image: "../src/assets/pastel_04.jpg", title:"pastel 04", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"pasteleria", precio:"$1700"
  },
  {
    id:11 ,  image: "../src/assets/pastel_05.jpg", title:"pastel 05", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"pasteleria", precio:"$1700"
  },
  {
     id:12 , image: "../src/assets/pastel_06.jpg", title:"pastel 06", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.m? ", categoria:"pasteleria", precio:"$1700"
  }
  
]


function asynkMock(categoriaId) {
  return new Promise((resolve, reject) =>  {
    
     setTimeout(() => {
     
      if(categoriaId === undefined) { 
      resolve(productos)
     
    } else {
      const productosFiltrados = productos.filter((item)=> {
        return item.categoria === categoriaId
      })
     
      resolve(productosFiltrados)
    
      
    }
     }, 2000);

  });
}






const ItemListContainer = () => {
  

const {categoriaId} = useParams();
const [productos, setProductos]= useState([]);
const [cargando, setCargando] = useState(false)







useEffect(() =>{
  setCargando(true)
    asynkMock(categoriaId).then((res) => setProductos(res))

},[categoriaId]);


  
  return (
    <>
  
              <Box flex alignContent="center" justifyContent="center">
                <Typography align='center' color="text.disabled" textTransform="uppercase" fontWeight="bold" fontSize="30px"  >{categoriaId} </Typography> 
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