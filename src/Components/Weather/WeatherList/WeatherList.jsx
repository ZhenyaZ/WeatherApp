import style from "./WeatherList.module.css";
import { CardContent, CircularProgress, Typography } from "@mui/material";
import Forecast from "../../../UI/Forecast";
import React from "react";

const WeatherList = (props) => {
  const [weatherData, setWeatherData] = React.useState();
  React.useEffect(() => {
    return setWeatherData(props.data);
  }, [props.data]);
  return (
    <React.Fragment>
      {console.log(weatherData)}
      {weatherData ? (
        <div className={style.paper}>
          <div className={style.card}>
            <CardContent>
              <Typography variant="h2">
                {weatherData.location.name}, {weatherData.location.country}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h5">
                Temperature: {weatherData.current.temp_c} &deg;C
              </Typography>
              <Typography variant="h5">
                Wind: {weatherData.current.wind_kph} KpH
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(117, 137, 238, 0.604)",
                  borderRadius: "16px",
                  marginTop: "10px",
                }}
              >
                <img src={weatherData.current.condition.icon} alt="" />
                Description: {weatherData.current.condition.text}
              </Typography>
            </CardContent>
          </div>
        </div>
      ) : (
        <CircularProgress color="inherit" />
      )}
      {weatherData ? (
        <Forecast style={style} data={weatherData} />
      ) : (
        <CircularProgress color="inherit" />
      )}
    </React.Fragment>
  );
};

export default WeatherList;
