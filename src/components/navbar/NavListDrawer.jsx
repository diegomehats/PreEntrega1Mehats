import {
  ListItem,
  ListItemText,
  List,
  Box,
  ListItemButton,
  ListItemIcon,
  Button,
  Divider,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <Button
          href="/carrito"
          key="carrito"
          color="inherit"
          fullWidth
          sx={{ marginTop: 4 }}
        >
          <ShoppingCartIcon fontSize="medium" />
        </Button>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
