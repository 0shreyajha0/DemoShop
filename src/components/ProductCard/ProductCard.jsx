import React from "react";
import { Box, Button, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { grey } from "@mui/material/colors";

export const ProductCard = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        px: 6,
        py: 4,
      }}
    >
      <Box
        sx={{
          border: "3px solid pink",
          padding: "10px",
          margin: "0px",
          backgroundColor: "white",
        }}
      >
        <img src={props.source} width="150px" height="125px" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "65%",
          mx: 2,
        }}
      >
        <Typography variant="p" sx={{ fontSize: "25px" }}>
          {props.nameOfProduct}
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px" }}>
          Rs {props.price}
        </Typography>
        <Typography sx={{ fontSize: 15, color: grey[500] }}>
          Category:
        </Typography>
        <Typography variant="p"> {props.category}</Typography>
        <Typography sx={{ fontSize: 15, color: grey[500] }}>
          Description:
        </Typography>
        <Typography variant="p">{props.description}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="p" sx={{ textAlign: "center" }}>
            Ratings
          </Typography>
          <Box
            sx={{
              padding: 1,
              bgcolor: "white",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              ml: 1,
            }}
          >
            <StarRateIcon sx={{ color: "gold" }} />
            <Typography variant="p" sx={{ textAlign: "center" }}>
              {props.rating}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => props.handelAddToCart(props.id)}
          >
            Add To Cart +
          </Button>
          <Button
            variant="outlined"
            onClick={() => props.handelSaveForLater(props.id)}
          >
            Save For Later
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
