import { Box, Button, Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const RafFrom = () => {
  interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
  }

  interface FormElement extends HTMLFormElement {
    elements: FormElements;
  }

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRaf = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailRaf?.current?.focus();
    if (nameRef.current) {
      nameRef.current.value = "helo";
    }
  }, []);
  const handleSubmit = (e: React.FormEvent<FormElement>) => {
    e.preventDefault();

    console.log(nameRef?.current?.value);
    console.log(emailRaf?.current?.value);
    console.log(phoneRef?.current?.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <Box
          mx="auto"
          rounded="10px"
          w="70%"
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="white"
          boxShadow={"0 0 10px 0 rgba(0,0,0,0.1)"}
          gap="10px"
        >
          <Input ref={nameRef} placeholder="Enter Name" name="name" size="md" />
          <Input
            ref={emailRaf}
            placeholder="Enter email"
            name="email"
            size="md"
          />
          <Input
            placeholder="Enter phone"
            type="number"
            name="phone"
            size="md"
            ref={phoneRef}
          />
          <Button type="submit" colorScheme="blue">
            Button
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default RafFrom;
