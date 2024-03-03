import React from "react";
import { Button, Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { red, grey } from "@mui/material/colors";

export const SearchAndSort = () => {
  const [sortBy, setSortBy] = React.useState("Ascending");
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
        height: 60,
        margin: "auto",
        backgroundColor: grey[200],
        mt: 4,
        borderRadius: "8px",
      }}
    >
      <FormControl variant="standard" sx={{ ml: 10 }}>
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
      <Box sx={{ display: "flex", alignItems: "center", mr: 10 }}>
        <Typography variant="h6" mr={4}>
          Sort By :
        </Typography>
        <Select
          value={sortBy}
          onChange={handleChange}
          sx={{ backgroundColor: grey[400] }}
          size="small"
        >
          {/* need change value later, array for each category like price=[proce of all products]; */}
          <MenuItem value={"Ascending"}>Ascending</MenuItem>
          <MenuItem value={"Decending"}>Decending</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};
