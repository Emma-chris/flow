import { createContext, useState, type FC, type ReactNode } from "react";

export const ContextProvider = createContext({});

interface iProps {
  children?: ReactNode;
  user?: any;
  setUser?: any;
}

const GlobalProvider: FC<iProps> = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")!)
  );
  return (
    <ContextProvider.Provider value={{ user, setUser }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default GlobalProvider;
