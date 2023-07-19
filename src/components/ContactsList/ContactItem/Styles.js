import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  width: 100%;
  .contactName {
    display: block;
    width: 50%;
    font-size: 16px;
    font-weight: 500;
  }
  .contactNumber {
    width: 50%;
    text-decoration: none;
    font-size: 16px;
    color: darkgreen;
  }
  .contactNumber:hover {
    color: darkseagreen;
    text-decoration: underline;
  }
`
