import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .contactName {
    flex-basis: 26%;
    font-size: 16px;
    font-weight: 500;
  }

  .contactNumber {
    flex-basis: 50%;
    text-decoration: none;
    font-size: 16px;
    color: darkgreen;
  }

  .contactNumber:hover {
    color: darkseagreen;
    text-decoration: underline;
  }
`;
