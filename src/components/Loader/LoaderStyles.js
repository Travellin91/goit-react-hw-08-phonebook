import styled, { keyframes } from 'styled-components';

const colorAnimation = keyframes`
  0% {
    color: greenyellow;
  }
  50% {
    color: yellow;
  }
  100% {
    color: greenyellow;
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;

  svg {
    animation: ${colorAnimation} 1.5s linear infinite;
  }
`;
