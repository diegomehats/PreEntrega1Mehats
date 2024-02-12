

import { useState } from "react";
import NavListDrawer from "./NavListDrawer"
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Drawer, Link, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';







const NavBar = () => {
    const [open, setOpen] = useState(false)

const navLinks= [

  {
      title: "Inicio", path: "", icon:<HomeIcon/>
  },
  {
    title: "Cafeteria", path: "cafeteria", icon: <CoffeeIcon/>
},
{
  title: "Pasteleria", path: "pasteleria", icon: <BakeryDiningIcon/>
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
                href="/"  
                variant="h5" 
                sx={{flexGrow: 1, textDecoration: "none", paddingX: 4, ":hover": {color:'info.main'}}}
                color="inherit">
                
                      Afrika
                 
             </Link>
            

            <Box sx={{display: {sm: "none",xs:"none", md:"block"},paddingX: 4}} >
              
                {   
                    
                   

                  navLinks.map(item => (
                 
                   <NavLink  to={`/categoria/${item.path}`}
                        className='navLink'
                       key={item.title} >
                        {item.title}

                   </NavLink>
                  
                   

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