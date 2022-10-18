/* eslint-disable react/jsx-pascal-case */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TipCalculatorContext } from '../contexts/TipCalculatorContext';

const InputSection = () => {
  const {
    billAmount,
    setBillAmount,
    guest,
    setGuest,
    tipPrecent,
    setTipPrecent,
    tipAmount,
    setTipAmount,
  } = useContext(TipCalculatorContext);
  return <$InputSection>InputSection</$InputSection>;
};

const $InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 413px;
  height: 417px;
  border-radius: 15px;
  margin-right: 48px;
`;
export default InputSection;
