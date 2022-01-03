import { createContext, useReducer } from "react";
import { TokenReducer } from "../reducers/edit-token-reducer";

interface IUserContext {
  token: string;
  setToken: (token: string) => void;
}

export const TokenContext = createContext<IUserContext>({
  token: "",
  setToken: (token: string) => {},
});

const TokenContextProvider: React.FC = ({ children }) => {
  const [token, dispatch] = useReducer(TokenReducer, "");
  const setToken = (token: string) => dispatch({ type: "UPDATE_TOKEN", token });
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
