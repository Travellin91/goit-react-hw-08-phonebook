import styled, { keyframes } from 'styled-components';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

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

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-weight: 500;
  animation: ${slideInAnimation} 0.5s ease-in-out;

  .logoutBtn {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #ff6b6b;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out;
    cursor: pointer;

    :hover,
    :focus {
      color: white;
      background-color: #ff4d4d;
      transform: scale(1.1);
      animation: ${hoverAnimation} 0.5s ease-in-out infinite;
    }
  }
`;
