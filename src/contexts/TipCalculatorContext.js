import React, { useState, createContext } from 'react';

export const TipCalculatorContext = createContext();

const TipCalculatorContextProvider = (props) => {
  const [billAmount, setBillAmount] = useState('');
  const [guest, setGuest] = useState(0);
  const [tipPrecent, setTipPrecent] = useState('');
  const [tipAmount, setTipAmount] = useState(0);

  return (
    <TipCalculatorContext.Provider
      value={{
        billAmount,
        setBillAmount,
        guest,
        setGuest,
        tipPrecent,
        setTipPrecent,
        tipAmount,
        setTipAmount,
      }}
    >
      {props.children}
    </TipCalculatorContext.Provider>
  );
};

export default TipCalculatorContextProvider;
