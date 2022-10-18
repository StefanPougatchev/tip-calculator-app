/* eslint-disable react/jsx-pascal-case */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TipCalculatorContext } from '../contexts/TipCalculatorContext';

const DisplaySection = () => {
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

  const handleClick = () => {
    setBillAmount(0);
    setGuest(0);
    setTipPrecent(0);
    setTipAmount(0);
  };

  return (
    <$DisplaySection>
      <AmountGroup>
        <AmountContainer>
          <TextContainer>
            <Title>Tip Amount</Title>
            <PerPersonText>/ person</PerPersonText>
          </TextContainer>
          <Number>{`$0.00`}</Number>
        </AmountContainer>
        <AmountContainer>
          <TextContainer>
            <Title>Total</Title>
            <PerPersonText>/ person</PerPersonText>
          </TextContainer>
          <Number>{`$0.00`}</Number>
        </AmountContainer>
      </AmountGroup>
      <ResetButton onClick={handleClick}>RESET</ResetButton>
    </$DisplaySection>
  );
};
const AmountGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const ResetButton = styled.button`
  width: 333px;
  height: 48px;
  margin-bottom: 40px;
  background: #26c2ae;
  border-radius: 5px;
  border: none;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;

  color: #00474b;
  :active {
    background: #9fe8df;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 333px;
  height: 71px;
  margin: 0px 40px 25px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.p`
  margin: 0px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #ffffff;
`;

const PerPersonText = styled.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;

  color: #7f9d9f;
  margin: 0px;
`;

const Number = styled.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 71px;
  /* identical to box height */

  text-align: right;
  letter-spacing: -1px;

  color: #26c2ae;
`;

const $DisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #00474b;
  border-radius: 15px;
  width: 413px;
  height: 417px;
`;

export default DisplaySection;
