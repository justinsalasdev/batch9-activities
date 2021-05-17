import { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

export default function AuthProvider({ initialState, children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}
