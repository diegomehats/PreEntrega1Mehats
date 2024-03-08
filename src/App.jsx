
import { Container} from "@mui/material"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";



function App({children}) {

  
  return (

    <BrowserRouter>
      <Layout>
        <Container sx={{marginBottom:10}}>
            <CssBaseline/>
            <Routes>
              <Route path="/" element= {<ItemListContainer/> } />
              <Route path="/categoria/:categoriaId" element= {<ItemListContainer/>}/>
              <Route path="/item/:itemId" element={<ItemListContainer/>}/>       
            </Routes>
            
          </Container>
      </Layout>
      </BrowserRouter>
  
  )} 


export default App
