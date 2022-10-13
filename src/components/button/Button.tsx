import React from 'react';

type ButtonType = {
  buttonText: string;
  buttonValue: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button = ({ buttonText, buttonValue, onClick, isDisabled }: ButtonType) => {
  return (
    <button value={buttonValue} onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};
