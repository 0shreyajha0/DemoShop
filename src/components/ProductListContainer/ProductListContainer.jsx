import { Box } from "@mui/material";
import { ProductCard } from "../ProductCard";
import Divider from "@mui/material/Divider";
import React from "react";
import { grey } from "@mui/material/colors";

export const ProductListContainer = (props) => {
  console.log(props.productList);

  const addToCartHandler = (id) => {
    console.log("handelAddToCart : ", id);
  };

  const saveForLaterHandler = (id) => {
    console.log("handelSaveForLater : ", id);
  };

  return (
    <Box sx={{ backgroundColor: grey[200], width: "90%", mx: "auto", my: 4 }}>
      {props.productList.map((productItem, index) => (
        <React.Fragment key={index}>
          <ProductCard
            source={productItem.image}
            nameOfProduct={productItem.title}
            price={productItem.price}
            category={productItem.category}
            description={productItem.description}
            rating={productItem.rating.rate}
            id={productItem.id}
            handelAddToCart={addToCartHandler}
            handelSaveForLater={saveForLaterHandler}
          />
          <Divider sx={{ width: "70%", my: 4, mx: "auto" }} />
        </React.Fragment>
      ))}
    </Box>
  );
};
