import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    background: linear-gradient(
      247.76deg,
      #123762 -0.48%,
      #151c24 45.37%,
      #123762 104.88%
    );
    box-shadow: 1px -3px 10px 3px #d3d3d3
    height: 20vh;
    padding: 1rem;
  `;

  const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 2.1em;
    font-weight: 200;
    margin: 0;
  `;

  const UL = styled.ul`
    margin: 2rem auto 0 auto;
    width: 40%;
    display: flex;
    justify-content: center;
  `;

  const List = styled.li`
    list-style: none;
    color: #fff;
  `;

  const Anchor = styled.a`
    color: #fff;
    margin: 0 1rem;
    font-size: 1.9rem;
  `;

  const P = styled.p`
    margin: 0 1rem;
    font-size: 2rem;
    color: #e2e2e2;
  `;

  return (
    <Footer>
      <Title>Created by Gabriel von Platen</Title>
      <UL>
        <List>
          <P>React</P>
        </List>
        <List>
          <P>Typescript</P>
        </List>
        <List>
          <P>Styled-Components</P>
        </List>
      </UL>
      <UL>
        <List>
          <Anchor
            href="https://github.com/GabrielvonPlaten/React-Weather"
            target="_blank"
          >
            Github
          </Anchor>
        </List>
        <List>
          <Anchor href="http://gabrielvonplaten.com" target="_blank">
            Portfolio
          </Anchor>
        </List>
      </UL>
    </Footer>
  );
};

export default Footer;
