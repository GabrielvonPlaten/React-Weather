import React from "react";
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
    &:hover {
      box-shadow: 0px 0px 10px 2px #d3d3d3;
    }
  `;

  const WeatherIcon = styled.img`
    display: flex;
    margin: 0 auto;
  `;

  const WeatherInfo = styled.div`
    text-align: center;
  `;

  const Temperature = styled.h3`
    color: #000046;
    margin: 0;
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
      <WeatherInfo>
        <Temperature>{weatherData.main.temp}°C</Temperature>
        <P>{weatherData.weather[0].main}</P>
        <P>{weatherData.dt_txt}</P>
      </WeatherInfo>
    </Card>
  );
};

export default Card;
