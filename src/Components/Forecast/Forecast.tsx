import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// INTERFACE
interface WeatherProp {
  weatherData: any;
}

const Forecast = ({ weatherData }: WeatherProp) => {
  console.log(weatherData);

  return (
    <div>
      <h1>Forecast</h1>
    </div>
  );
};

Forecast.propTypes = {
  weatherData: PropTypes.object
};

const mapStateToProps = (state: any) => ({
  weatherData: state.weatherData
});

export default connect(mapStateToProps)(Forecast);
