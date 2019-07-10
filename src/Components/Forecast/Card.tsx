import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface Forecast {
  weatherData: any;
}

const Card = ({ weatherData }: Forecast) => {
  const Card = styled.div`
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    background: #ffffff;
    padding-bottom: 0.8rem;
    transition: all 0.5s
    box-shadow: 0px 0px 3px 1px #d3d3d3;
    &:hover {
      box-shadow: 0px 0px 10px 3px #d1d1d1;
    }
  `;

  const WeatherIcon = styled.img`
    float: left;
  `;

  const WeatherInfo = styled.div`
    text-align: center;
    clear: both;
  `;

  const Temperature = styled.h3`
    color: #000046;
    float: right;
    font-size: 2rem;
    font-weight: 200;
    top: 30%;
    right: 5%;
    margin: 0;
    position: relative;
  `;

  const P = styled.p`
    margin: 0.4rem auto;
  `;

  console.log(weatherData);

  return (
    <Card>
      <WeatherIcon
        src={
          "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" +
          weatherData.weather[0].icon +
          ".png"
        }
      />
      <Temperature>{weatherData.main.temp}°C</Temperature>
      <br />
      <WeatherInfo>
        <P>{weatherData.weather[0].main}</P>
        <P>{weatherData.dt_txt}</P>
      </WeatherInfo>
    </Card>
  );
};

Card.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default Card;
