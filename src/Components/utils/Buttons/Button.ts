import styled from "styled-components";
import colors from "../colors";

const { white_0, white_1, black_1 } = colors;

const Button = styled.button`
  background: ${white_0};
  border: 2px solid ${white_0};
  border-radius: 3px;
  color: ${black_1};
  padding: 0.5rem 1.3rem;
  margin: 0.3rem
  transition: all 0.3s;
  &:hover {
    border: 2px solid ${white_1};
    background: ${white_1};
    color: ${black_1};
  }
`;

export default Button;
