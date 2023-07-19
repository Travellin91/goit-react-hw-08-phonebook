import styled, { keyframes } from 'styled-components';

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;

  .navLink {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 700;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    background-color: white;
    outline: none;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out;

    :hover {
      color: white;
      background-color: #ff4d4d;
      animation: ${hoverAnimation} 0.5s ease-in-out infinite;
    }
  }
`;
