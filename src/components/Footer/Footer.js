import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  color: black;
  padding: 20px;
  text-align: center;
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

const App = () => {
  return (
    <PageContainer>
      <MainContent>
      </MainContent>
      <Footer>
        <FooterContent>
          <FooterText>&copy; 2023 Travellin91. Усі права захищені.</FooterText>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
};

export default App;
