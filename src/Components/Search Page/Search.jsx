import React from "react";
import style from "./Search.module.css";
import SearchInput from "./SearchInput";
import Weather from "../Weather/Weather";
import ErrorMessage from "../../UI/ErrorMessage";

const Search = () => {
  const [data, setData] = React.useState([{}]);
  const [click, setClick] = React.useState(false);

  const onGetData = (data) => {
    setData(data);
    console.log(data);
  };
  const onGetClick = (click) => {
    setClick(click);
  };
  return (
    <React.Fragment>
      <SearchInput onGetData={onGetData} onGetClick={onGetClick} />
      {click === false ? (
        <ErrorMessage className={style.errorMessage}>
          Please enter the correct city or confirm the search
        </ErrorMessage>
      ) : (
        <Weather WeatherData={data} />
      )}
    </React.Fragment>
  );
};

export default Search;
