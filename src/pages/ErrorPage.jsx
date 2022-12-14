import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  /* 100vh - header and footer in pixels */
  min-height: calc(100vh - 60px - 90px);
`;

const ErrorPage = () => {
  return (
    <Container>
      <h1>Page Not Found!</h1>
      <h4>Check your URL or try refreshing the page.</h4>
    </Container>
  );
};

export default ErrorPage;