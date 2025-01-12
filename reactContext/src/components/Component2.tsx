import React, { useContext } from "react";
import { USUser } from "../context/UserContext";
import { NumberCalculation } from "../context/CalculateContext";

const Component2 = () => {
  const user = useContext(USUser); // Consume user context
  const { number1, number2, setNumber1, setNumber2 } =
    useContext(NumberCalculation); // Consume number calculation context

  const result = number1 + number2; // Calculate sum dynamically

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
          />
        </label>
      </div>

      <p>Sum: {result}</p>
    </div>
  );
};

export default Component2;
