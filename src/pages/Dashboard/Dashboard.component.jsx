import Box from "@mui/material/Box";
import { Header } from "../../components/Header";
import { SearchAndSort } from "../../components/SearchAndSort";
import { ProductListContainer } from "../../components/ProductListContainer";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProductList(json);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Box sx={{ margin: "0", padding: "0" }}>
      <Header />
      <SearchAndSort />
      <ProductListContainer productList={productList} />
    </Box>
  );
};
