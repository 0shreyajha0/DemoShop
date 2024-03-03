import { Button, Box, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";

export const Header = () => {
  const pages = ["Product", "Categories", "Profile"];

  const handleCloseNavMenu = () => {
    console.log("it works");
  };

  const handleCartButton = () => {
    console.log("cartclicked");
  };

  return (
    <Box
      sx={{
        backgroundColor: pink[100],
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 10,
        py: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AdbIcon />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "Black",
            textDecoration: "none",
            ml: 1,
          }}
        >
          Demo Shop
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ mx: 1, color: "black", fontWeight: 350 }}
            onClick={handleCloseNavMenu}
          >
            {page}
          </Button>
        ))}
        <IconButton aria-label="cart" onClick={handleCartButton}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
