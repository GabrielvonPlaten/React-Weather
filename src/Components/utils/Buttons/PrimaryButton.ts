import styled from "styled-components";
import colors from "../colors";

const { white_0, blue_0, blue_1, black_1 } = colors;

const Button = styled.button`
  background: ${blue_0};
  border: 2px solid ${blue_0};
  border-radius: 3px;
  color: ${white_0};
  padding: 0.5rem 1.3rem;
  margin: 0.3rem
  transition: all 0.3s;
  &:hover {
    border: 2px solid ${blue_1};
    background: ${blue_1};
    color: ${white_0};
  }
`;

export default Button;
