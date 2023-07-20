import styled from 'styled-components';

const Footer = styled.footer`
  color: black;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 480px;
  margin: 0 auto;
  border-top: 3px solid lightgray;
`;

const FooterContent = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <FooterContent>
        <FooterText>&copy; 2023 Travellin91. Усі права захищені.</FooterText>
      </FooterContent>
    </Footer>
  );
};

export default FooterComponent;
