import React from 'react';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Theme from './theme/theme';
import CalculatorContainer from './components/CalculatorContainer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <CalculatorContainer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

// AppContainer styles. Centers <Header /> component
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #c5e4e7;
  color: black;
`;
