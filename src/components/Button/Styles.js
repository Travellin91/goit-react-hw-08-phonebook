import styled, { keyframes } from 'styled-components';

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 10px 10px;
  background-color: darkseagreen;
  font-size: 16px;
  font-weight: 700;
  color: whitesmoke;
  cursor: pointer;
  animation: ${hoverAnimation} 1s infinite;

  :hover {
    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    animation: none;
  }
`;
