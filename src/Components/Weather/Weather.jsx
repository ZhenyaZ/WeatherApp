import WeatherList from "./WeatherList/WeatherList";
import React from "react";

const Weather = (props) => {
  return (
    <React.Fragment>
      <WeatherList data={props.WeatherData} />
    </React.Fragment>
  );
};

export default Weather;
