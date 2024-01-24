import { useState } from "react";
import NavListDrawer from "./NavListDrawer"
import { AppBar, Box, Button, Drawer, IconButton, Link, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const NavBar = () => {
    const [open, setOpen] = useState(false)

const navLinks= [

  {
      title: "Inicio", path: "#Inicio", icon:<HomeIcon/>
  },
  {
    title: "Cafeteria", path: "#Cafeteria", icon: <CoffeeIcon/>
},
{
  title: "Pasteleria", path: "#Pasteleria", icon: <BakeryDiningIcon/>
},

]


  return (
    <>
    <AppBar>
        <Toolbar >
            <IconButton 
                color="inherit"
                size = "large"
                onClick={() => setOpen(true)}
                sx={{display: {sm: "flex", md:"none"}}}
            >
                <MenuIcon />
            </IconButton>
            <Link 
                href="#inicio"  
                variant="h5" 
                sx={{flexGrow: 1, textDecoration: "none", paddingX: 4}}
                color="inherit">
                
                      Afrika
                 
            </Link>

            <Box sx={{display: {sm: "none",xs:"none", md:"block"},paddingX: 4}} >
              
                {
                  navLinks.map(item => (
                    <Button
                    sx={{
                      paddingX: 3,
                      transition: "0.2s",
                      "&:hover":{
                        transform: "scale(1.05)",
                        backgroundColor: "rgb(100, 67, 42)"
                      },
            
                    }}
                     color="inherit"key={item.title}
                     href={item.path} 
                    >
                        {item.title}</Button>

                  ))
                }
                <Button href="#carrito" key="#carrito" color="inherit" >
                    <ShoppingCartIcon/>
                </Button>


            </Box>

        </Toolbar>
    </AppBar>
       

        <Drawer
          open = {open}
          anchor = "left"
          onClose={() => setOpen(false)}
          sx={{display: {sm: "flex", md:"none"}}}
        > 
            <NavListDrawer navLinks ={navLinks} />
        </Drawer>
   
    </>
  );
}

export default NavBar