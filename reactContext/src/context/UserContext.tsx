import React, { createContext, useState } from "react";

export interface User {
  name: string;
  age: number;
}

export const USUser = createContext<User>({
  name: "Adnan",
  age: 30,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({ name: "Adnan", age: 30 });

  return <USUser.Provider value={user}>{children}</USUser.Provider>;
};
