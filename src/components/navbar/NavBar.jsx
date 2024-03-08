import { useState } from "react";
import NavListDrawer from "./NavListDrawer"
import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, Drawer, Link, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../assets/Logo.png'




const NavBar = () => {
    const [open, setOpen] = useState(false)
const navLinks= [

  {
      title: "Inicio", path: "/", icon:<HomeIcon/>
  },
  {
    title: "Cafeteria", path: "categoria/cafeteria", icon: <CoffeeIcon/>
},
{
  title: "Pasteleria", path: "categoria/pasteleria", icon: <BakeryDiningIcon/>
},

]


  return (
    <>
    <AppBar>
        <Toolbar sx={{height: 10}}>
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
                sx={{flexGrow: 1, transition:"0.5s", ":hover":{transform: "scale(1.02)"} }}>
               
                       <img src={Logo} width={120} height={120}/> 
   
             </Link>
            

            <Box sx={{display: {sm: "none",xs:"none", md:"block"}}} >
              
                {   

                  navLinks.map(item => (
                 
                   <NavLink  to={item.path}
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