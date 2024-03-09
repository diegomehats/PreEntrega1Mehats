import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Product from "../Product/Product";
import CircularProgress from "@mui/material/CircularProgress";

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      try {
        let productoRef;
        if (categoriaId === undefined) {
          productoRef = collection(db, "productos");
        } else {
          productoRef = query(
            collection(db, "productos"),
            where("categoryId", "==", categoriaId),
          );
        }
        const querySnapshot = await getDocs(productoRef);
        const products = querySnapshot.docs.map((doc) => doc.data());
        setProductos(products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoriaId]);

  if (loading) {
    return (
      <Box>
        <Typography>Loading...</Typography>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box flex alignContent="center" justifyContent="center">
        <Typography
          align="center"
          marginTop={4}
          color="text.disabled"
          textTransform="uppercase"
          fontWeight="bold"
          fontSize="30px"
        >
          {categoriaId}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {productos.map((producto) => (
          <Grid item md={4} mt={4} key={producto.title}>
            <Product producto={producto} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ItemListContainer;
