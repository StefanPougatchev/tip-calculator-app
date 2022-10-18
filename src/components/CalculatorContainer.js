import React from 'react';
import styled from 'styled-components';
import InputSection from './InputSection';
import DisplaySection from './DisplaySection';
import TipCalculatorContextProvider from '../contexts/TipCalculatorContext';

const CalculatorContainer = () => {
  return (
    <CalcContainer>
      <TipCalculatorContextProvider>
        <InputSection />
        <DisplaySection />
      </TipCalculatorContextProvider>
    </CalcContainer>
  );
};

const CalcContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background: white;
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  border-radius: 25px;
`;

export default CalculatorContainer;
