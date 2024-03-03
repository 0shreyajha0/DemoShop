import { Button, Box, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { yellow } from "@mui/material/colors";

export const Header = () => {
  const pages = ["Product", "Categories", "Profile"];

  const handleCloseNavMenu = () => {
    console.log("it works");
  };

  const handleCartButton = () => {
    console.log("cartclicked");
  };

  return (
    <Box sx={{ backgroundColor: yellow[100], display: "flex" }}>
      <Box sx={{ display: "flex" }}>
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
          }}
        >
          Demo Shop
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
      <IconButton aria-label="delete" size="medium" onClick={handleCartButton}>
        <ShoppingCartIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
