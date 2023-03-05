import react, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme.js";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
