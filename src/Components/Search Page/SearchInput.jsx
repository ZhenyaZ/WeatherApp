import React from "react";
import style from "./SearchInput.module.css";
import Card from "@mui/material/Card";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, CardActions, IconButton } from "@mui/material";

const SearchInput = (props) => {
  const [City, setCity] = React.useState("Pardubice");
  const key = "83d557ea5d43425dbe8202739231003";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${City}&days=7&aqi=yes&alerts=yes`;

  const RequestHandler = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data !== undefined) props.onGetData(data);
    props.onGetClick(true);
  };
  return (
    <Box className={style.box}>
      <Card
        sx={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          margin: "0 auto",
        }}
      >
        <CardActions>
          <InputBase
            value={City}
            onChange={(e) => setCity(e.target.value)}
            sx={{ width: "200px", height: "30px" }}
            placeholder="Search Weather in City"
          />
        </CardActions>
        <CardActions>
          <IconButton onClick={RequestHandler}>
            <SearchIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SearchInput;
