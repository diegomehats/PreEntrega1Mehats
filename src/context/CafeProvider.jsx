import { useParams } from 'react-router-dom';
import { createContext, useState, useEffect } from "react"
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const CafeContext = createContext();

const CafeProvider = ({children}) => {
 
  //const { categoriaId } = useParams()
  const categoriaId = 'cafeteria'
 const [productos, setProductos]= useState([]);
  useEffect(() =>{
    const db = getFirestore();
    const productoRef = query(collection(db, "productos"), where("categoryId", "==", categoriaId));
    getDocs(productoRef).then((collection) => {
     const products =collection.docs.map((doc) => {
      return doc.data();
     })
     setProductos(products)
    })
    
  },[categoriaId]);
  

  return (
    <CafeContext.Provider
        value={{
          categoriaId,
            productos,
            
           
            

        }}
    > 
        {children}
    </CafeContext.Provider>
  )
}

export {CafeProvider}
export default CafeContext