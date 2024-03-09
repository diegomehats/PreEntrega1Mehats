import React from "react";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import useCafe from "../../hooks/useCafe";

const Carrito = () => {
  const { pedido, eliminarProducto } = useCafe();

  const calcularTotal = (pedido) => {
    return pedido.reduce(
      (total, producto) => total + producto.price * producto.cantidad,
      0
    );
  };

  return (
    <Container>
      {pedido.length > 0 ? (
        <>
          {pedido.map((producto, index) => (
            <Grid container key={index} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Card sx={{ my: 2, boxShadow: 4 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={`../../../public/${producto.image}.jpg`}
                          alt={producto.title}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Typography variant="h6">{producto.title}</Typography>
                        <Typography>{producto.description}</Typography>
                        <Typography>Precio: ${producto.price}</Typography>
                        <Typography>Cantidad: {producto.cantidad}</Typography>
                        <Typography>
                          Subtotal: ${producto.price * producto.cantidad}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                      >
                        <IconButton
                          onClick={() => eliminarProducto(producto)}
                        >
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))}
          <Grid container justifyContent="center">
            <Grid item>
              <Typography color="text.disabled" variant="h4">
                Total: ${calcularTotal(pedido)}
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography variant="h6">Aún no tienes pedidos</Typography>
      )}
    </Container>
  );
};

export default Carrito;
