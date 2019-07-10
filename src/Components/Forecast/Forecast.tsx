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
    margin: 1.4rem auto
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
  `;

  return (
    <Fragment>
      {Object.keys(weatherData).length > 0 && (
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
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  weatherData: state.weatherData
});

export default connect(mapStateToProps)(Forecast);
