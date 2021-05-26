import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

export const userStateContext = createContext();
export const userDispatchContext = createContext();

const initialState = {
  photoURL: "",
  email: "",
  uid: ""
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <userStateContext.Provider value={state}>
      <userDispatchContext.Provider value={dispatch}>{children}</userDispatchContext.Provider>
    </userStateContext.Provider>
  );
}
