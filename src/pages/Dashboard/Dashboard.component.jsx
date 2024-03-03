import Box from "@mui/material/Box";
import { Header } from "../../components/Header";
import { SearchAndSort } from "../../components/SearchAndSort";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductListContainer } from "../../components/ProductListContainer";

export const Dashboard = () => {
  return (
    <Box>
      <Header />
      <SearchAndSort />
      <ProductListContainer />
    </Box>
  );
};
