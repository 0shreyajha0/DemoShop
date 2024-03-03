import { Box } from "@mui/material";
import { ProductCard } from "../ProductCard";

export const ProductListContainer = (props) => {
  console.log(props.productList);

  const addToCartHandler = (id) => {
    console.log("handelAddToCart : ", id);
  };

  const saveForLaterHandler = (id) => {
    console.log("handelSaveForLater : ", id);
  };

  return (
    <Box>
      {props.productList.map((productItem, index) => (
        <ProductCard
          key={index}
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
      ))}
    </Box>
  );
};
