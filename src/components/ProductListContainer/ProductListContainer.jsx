import { Box } from "@mui/material";
import { ProductCard } from "../ProductCard";

export const ProductListContainer = () => {
  const addToCartHandler = (id) => {
    console.log("handelAddToCart : ", id);
  };

  const saveForLaterHandler = (id) => {
    console.log("handelSaveForLater : ", id);
  };
  return (
    <Box>
      <ProductCard
        source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        nameOfProduct="1stnameOfProduct"
        price="2500"
        category="men's"
        description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
        rating="5.0"
        id="1"
        handelAddToCart={addToCartHandler}
        handelSaveForLater={saveForLaterHandler}
      />
      <ProductCard
        source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        nameOfProduct="1stnameOfProduct"
        price="2500"
        category="men's"
        description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
        rating="5.0"
        id="2"
        handelAddToCart={addToCartHandler}
        handelSaveForLater={saveForLaterHandler}
      />
    </Box>
  );
};
