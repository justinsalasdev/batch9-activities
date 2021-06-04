import { createContext, useReducer } from "react";
import lettersReducer from "../reducers/lettersReducer";

export const lettersStateContext = createContext();
export const lettersDispatchContext = createContext();

const initialState = {
  isCreated: false,
  letters: []
};

export default function LettersProvider({ children }) {
  const [state, dispatch] = useReducer(lettersReducer, initialState);
  return (
    <lettersStateContext.Provider value={state}>
      <lettersDispatchContext.Provider value={dispatch}>{children}</lettersDispatchContext.Provider>
    </lettersStateContext.Provider>
  );
}
