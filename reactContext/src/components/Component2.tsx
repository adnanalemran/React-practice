import React, { useContext } from "react";
import { USUser } from "../context/UserContext";
import { NumberCalculation } from "../context/CalculateContext";
import { Button, Flex, Heading } from "@chakra-ui/react";

const Component2 = () => {
  const user = useContext(USUser);
  const { number1, number2, setNumber1, setNumber2 } =
    useContext(NumberCalculation);

  const result = number1 + number2;

  return (
    <div>
      <Heading as="h1" size="xl">
        Component 2
      </Heading>
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
      <Flex gap="4" padding={4}>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </Flex>
    </div>
  );
};

export default Component2;
