import styled from "styled-components";

const Input = styled.input`
  background: none;
  border: 1px solid rgba(13, 56, 130, 0.5);
  border-radius: 3px;
  color: #fff;
  font-size: 1.8rem;
  padding: 0.6rem;
  margin: 1rem 0;
  width: 95%;
  transition: all 0.2s;

  &:focus {
    border: 1px solid rgba(13, 46, 180, 1);
  }
`;

export default Input;
