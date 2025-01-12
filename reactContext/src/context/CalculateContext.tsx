import { createContext, useState } from "react";

export interface NumberContextType {
  number1: number;
  number2: number;
  setNumber1: (value: number) => void;
  setNumber2: (value: number) => void;
}

// Number Calculation Context
export const NumberCalculation = createContext<NumberContextType>({
  number1: 0,
  number2: 0,
  setNumber1: () => {},
  setNumber2: () => {},
});

// Number Calculation Provider
export const NumberCalculationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  return (
    <NumberCalculation.Provider
      value={{ number1, number2, setNumber1, setNumber2 }}
    >
      {children}
    </NumberCalculation.Provider>
  );
};
