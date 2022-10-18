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

  const handleBillAmountChange = (e) => {
    e.preventDefault();
    setBillAmount(+e.target.value);
  };
  return (
    <$InputSection>
      <BillAmountSection>
        <Text>Bill</Text>
        <InputField
          type='text'
          placeholder={billAmount}
          value={billAmount}
          onChange={(e) => handleBillAmountChange(e)}
        />
      </BillAmountSection>
      <SelectTipSection>
        <Text>Select Tip %</Text>
        <TipButtonSection>
          <TipPrecentageButton>5%</TipPrecentageButton>
          <TipPrecentageButton>10%</TipPrecentageButton>
          <TipPrecentageButton>15%</TipPrecentageButton>
          <TipPrecentageButton>25%</TipPrecentageButton>
          <TipPrecentageButton>50%</TipPrecentageButton>
          <InputPrecentage
            type='text'
            placeholder='Custom'
          />
        </TipButtonSection>
      </SelectTipSection>
    </$InputSection>
  );
};

const SelectTipSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const TipButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const BillAmountSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #5e7a7d;
  margin: 0px 0px 6px;
`;

const InputField = styled.input`
  background: #f3f9fa;
  width: 379px;
  border: none;
  border-radius: 5px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: right;

  color: #00474b;

  :hover {
    cursor: pointer;
  }
`;

const TipPrecentageButton = styled.button`
  padding: 0px;
  height: 48px;
  width: 117px;
  border: none;
  border-radius: 5px;
  background: #00474b;
  border-radius: 5px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin: 8px 0px 8px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  cursor: pointer;

  :active {
    color: #00474b;
    background: #9fe8df;
  }
`;

const InputPrecentage = styled.input`
  height: 48px;
  width: 117px;
  border: none;
  border-radius: 5px;
  background: #f3f9fa;
  border-radius: 5px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;

  color: #547878;

  padding: 0px;

  :focus {
    text-align: right;
    color: #00474b;
    caret-color: #26c2ae;
    border: none;
    &::placeholder {
      color: transparent;
    }
  }
`;
const $InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  width: 379px;
  height: 388px;
  border-radius: 15px;
  margin-right: 48px;
`;
export default InputSection;
