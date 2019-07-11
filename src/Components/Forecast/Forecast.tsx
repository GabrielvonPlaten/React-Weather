import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Card from "./Card";

// Styled Components
import Titles from "../utils/Titles/Titles";
const { Title2 } = Titles;

// INTERFACE
interface WeatherProp {
  weatherData: any;
}

const Forecast = ({ weatherData }: WeatherProp) => {
  console.log(weatherData);
  const Forecast = styled.div`
    width: 80%
    margin: 5.4rem auto;

    @media only screen and (max-width: 1650px) {
      width: 95%;
    }
    `;

  const ForecastTilte = styled(Title2)`
    color: #000040;
    text-align: center;
    font-weight: 300;
  `;

  const GridView = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1rem;

    @media only screen and (max-width: 1650px) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media only screen and (max-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 980px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 780px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 590px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const EmptyResultText = styled.h1`
    color: #c7c7c7 
    display: flex;
    justify-content: center;
    margin-top: 10%;

    @media only screen and (max-width: 650px) {
      font-size: 2rem;
    }
  `;

  return (
    <Fragment>
      {Object.keys(weatherData).length > 0 ? (
        <Forecast>
          <ForecastTilte>
            {weatherData.city.name} - 5 Day / 3 Hours Forecast
          </ForecastTilte>
          <GridView>
            {weatherData.list.map((item: object, index: number) => (
              <Card key={index} weatherData={item} />
            ))}
          </GridView>
        </Forecast>
      ) : (
        <EmptyResultText>
          Search for a location to know its weather.
        </EmptyResultText>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  weatherData: state.weatherData
});

export default connect(mapStateToProps)(Forecast);
