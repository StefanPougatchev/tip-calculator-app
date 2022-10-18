/* eslint-disable react/jsx-pascal-case */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { TipCalculatorContext } from '../contexts/TipCalculatorContext';
import DollarSvg from '../assets/svgs/icon-dollar.svg';

const InputSection = () => {
  const {
    billAmount,
    setBillAmount,
    guest,
    setGuest,
    tipPrecent,
    setTipPrecent,
  } = useContext(TipCalculatorContext);

  const handleBillAmountChange = (e) => {
    e.preventDefault();
    setBillAmount(+e.target.value);
  };

  const handleGuestAmountChange = (e) => {
    e.preventDefault();
    setGuest(+e.target.value);
  };

  const handleTipPrecentage = (num) => {
    const tip = num / 100;
    setTipPrecent(tip);
  };

  const handleCustomTip = (e) => {
    e.preventDefault();
    const tip = +e.target.value / 100;
    setTipPrecent(tip);
  };

  const tipNumbers = [5, 10, 15, 25, 50];

  return (
    <$InputSection>
      <BillAmountSection>
        <Text>Bill</Text>
        <InputField
          type='number'
          placeholder='0'
          onfocus="this.placeholder=''"
          value={billAmount}
          onChange={(event) => handleBillAmountChange(event)}
        />
      </BillAmountSection>
      <SelectTipSection>
        <Text>Select Tip %</Text>
        <TipButtonSection>
          {tipNumbers.map((tip, idx) => {
            return (
              <TipPrecentageButton
                key={`${tip}-${idx}`}
                onClick={() => handleTipPrecentage(tip)}
              >{`${tip}%`}</TipPrecentageButton>
            );
          })}
          <InputPrecentage
            type='text'
            placeholder='Custom'
            onfocus="this.placeholder=''"
            onChange={(e) => handleCustomTip(e)}
          />
        </TipButtonSection>
      </SelectTipSection>
      <SelectGuestSection>
        <Text>Number of People</Text>
        <InputField
          type='number'
          placeholder='0'
          value={guest}
          onChange={(e) => handleGuestAmountChange(e)}
        />
      </SelectGuestSection>
    </$InputSection>
  );
};

const SelectGuestSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SelectTipSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 38px;
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
  height: 48px;
  padding: 0px;
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
    border: 2px solid #26c2ae;
  }

  :focus {
    caret-color: #26c2ae;
    &::placeholder {
      color: transparent;
    }
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
  cursor: pointer;
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
  :hover {
    border: 2px solid #26c2ae;
  }
  :focus {
    text-align: right;
    color: #00474b;
    caret-color: #26c2ae;
    border: 2px solid #26c2ae;
    &::placeholder {
      color: transparent;
    }
  }
`;
const $InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 379px;
  height: 388px;
  border-radius: 15px;
  margin-right: 48px;
`;

export default InputSection;
