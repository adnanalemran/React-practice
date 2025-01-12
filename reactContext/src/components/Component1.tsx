import { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });
  return (
    <div>
      <Component2 user={user} />
    </div>
  );
};

export default Component1;
