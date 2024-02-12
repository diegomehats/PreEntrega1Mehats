import NavBar from "../navbar/NavBar"
import { useState } from "react";
import {createTheme, Box, Typography, ThemeProvider } from "@mui/material"
import Switch from '@mui/material/Switch'




const Layout = ({children}) => {

    const mode = 'light';

    


  const[isDark, setIsDark] = useState(false)

  const theme = createTheme
  ({
    palette: {
      mode,
      ...( isDark?  
          
             /*Dark Mode*/

            { primary: {
              main: '#323235',
            },
            secondary: {
              main: '#3D3D3D',
            },
            text: {
             
              disabled: 'white',
            },
            background: {
              default: '#4D4D4D',
            },
            info: {
              main: '#B2935B',
              dark: '#59492D',
            },}
        
            : 
            /* Ligth Mode */
            { primary: {
                main: '#90603C',
              },
              secondary: {
                main: '#C6B799',
              },
              text: {
                primary: '#90603C',
                disabled: 'black',
              },
              background: {
                default: '#E5DAC3',
              },
              info: {
                main: '#B2935B',
                dark: '#59492D',
              },
            
          
          })
       
}}) 


  return (
    <>
        <ThemeProvider theme = {theme}>
        <NavBar/>

        <Box sx={{marginTop:2, marginX:"auto"}}>  
              <Typography margin={10} color="text.disabled"> Dark Mode
                  <Switch  onChange={() => setIsDark(!isDark)} color="error"/>
              </Typography>  

             
              {children}
          </Box>
          
          </ThemeProvider>
    
    </>
  )
}

export default Layout