import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const ProductCard = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <img src={props.source} width="150px" height="125px" />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{props.nameOfProduct}</Typography>
        <Typography variant="h6">Rs {props.price}</Typography>
        <Typography variant="h6">{props.category}</Typography>
        <Typography variant="h6">{props.description}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="p">Ratings : {props.ratiing}</Typography>
        <Button onClick={() => props.handelAddToCart(props.id)}>
          Add To Cart +
        </Button>
        <Button onClick={() => props.handelSaveForLater(props.id)}>
          Save For Later
        </Button>
      </Box>
    </Box>
  );
};
