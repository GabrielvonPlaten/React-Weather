import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./Header.sass";
import bgImage from "../../Styles/images/landing-bg.jpg";

// Styled Components
import Titles from "../utils/Titles/Titles";
import Label from "../utils/Label/Label";
import Input from "../utils/Input/Input";
import PrimaryButton from "../utils/Buttons/PrimaryButton";
const { Title1 } = Titles;

const Header: React.FC = () => {
  const [formData, setFormData] = useState<string>("");
  const [weatherData, setWeatherData] = useState<object>();
  const API_KEY = process.env.API_KEY;

  const Header = styled.header`
    background-image: url(${bgImage});
    background-position: bottom;
    background-blend-mode: darken;
    background-color: rgba(133, 240, 200, 0.4);
    background-size: cover;
    box-shadow: 1px 3px 10px 3px #d3d3d3
    height: 200px;
    text-align: center;
    padding: 1px;
    margijn: 1px;
  `;

  const Form = styled.form`
    width: 20%;
    text-align: left
    margin: 0 auto;
  `;

  const fetchWeather = async (e: any) => {
    e.preventDefault();

    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${formData}&appid=${API_KEY}`
      )
      .then(res => setWeatherData(res.data))
      .catch(err => console.log(err));

    console.log(weatherData);
  };

  return (
    <Header>
      <Title1>React Weather</Title1>
      <Form onSubmit={e => fetchWeather(e)}>
        <div>
          <div>
            <Label>Location</Label>
          </div>
          <div>
            <div>
              <Input
                type="text"
                placeholder="Location"
                name="locationName"
                value={formData}
                autoFocus
                onChange={e => setFormData(e.target.value)}
              />
            </div>
          </div>
        </div>
        <PrimaryButton>Search</PrimaryButton>
      </Form>
    </Header>
  );
};

export default Header;
