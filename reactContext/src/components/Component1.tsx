import React from "react";
import Component2 from "./Component2";
import { UserProvider } from "../context/UserContext";
import { NumberCalculationProvider } from "../context/CalculateContext";

const Component1 = () => {
  return (
    <UserProvider>
      <NumberCalculationProvider>
        <Component2 />
      </NumberCalculationProvider>
    </UserProvider>
  );
};

export default Component1;
