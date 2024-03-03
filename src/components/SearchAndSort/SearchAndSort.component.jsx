import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { red } from "@mui/material/colors";

export const SearchAndSort = () => {
  const [sortBy, setSortBy] = React.useState("");
  const handleChange = (event) => {
    setSortBy(event.target.value);
    console.log("i can handle sort ");
    console.log(event);
  };

  const handleSearchClick = () => {
    console.log("i can search");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        margin: "auto",
        backgroundColor: red[50],
      }}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Search a Product
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon onClick={handleSearchClick} />
            </InputAdornment>
          }
        />
      </FormControl>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6">Sort By :</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort By : "
          onChange={handleChange}
        >
          {/* need change value later, array for each category like price=[proce of all products]; */}
          <MenuItem value={10}>Price</MenuItem>
          <MenuItem value={20}>Category</MenuItem>
          <MenuItem value={30}>Ratings</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};
