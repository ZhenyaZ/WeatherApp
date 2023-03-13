import React from "react";
import Card from "./Card";
import style from "../Components/Weather/WeatherList/Forecast.module.css";
const Forecast = (props) => {
  var arr, forecastData;
  arr = [];
  forecastData = [];
  arr.push(props.data.forecast);
  const flattedArr = arr.flat(Infinity);
  Array.from(flattedArr).map((data) => {
    return data.forecastday.map((datas) => {
      return forecastData.push(datas);
    });
  });
  return (
    <React.Fragment>
      <div className={props.style.paper}>
        {forecastData.map((data) => {
          return (
            <Card className={props.style.paper}>
              <div className={style.forecast__wrapper}>
                <div className={style.forecast__title}>
                  <h3>{data.date}</h3>
                </div>
                <div className={style.forecast__img}>
                  <img
                    src={data.day.condition.icon}
                    alt={data.day.condition.text}
                  />
                </div>
                <div className={style.forecast__temperature}>
                  <p>Max: {data.day.maxtemp_c}&deg;C</p>
                  <p>Avg: {data.day.avgtemp_c}&deg;C</p>
                  <p>Min: {data.day.mintemp_c}&deg;C</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Forecast;
