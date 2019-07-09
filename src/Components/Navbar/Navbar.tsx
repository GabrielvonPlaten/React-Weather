import React from "react";
import styled from "styled-components";
import "./Navbar.sass";
import bgImage from "../../Styles/images/landing-bg.jpg";

// Styled Components
import Titles from "../utils/Titles/Titles";
import Label from "../utils/Label/Label";
import Input from "../utils/Input/Input";
import PrimaryButton from "../utils/Buttons/PrimaryButton";
const { Title1 } = Titles;

const Navbar: React.FC = () => {
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

  return (
    <Header>
      <Title1>React Weather</Title1>
      <Form>
        <div>
          <div>
            <Label>Location</Label>
          </div>
          <div>
            <div>
              <Input placeholder="Name..." />
            </div>
          </div>
        </div>
        <PrimaryButton>Search</PrimaryButton>
      </Form>
    </Header>
  );
};

export default Navbar;
