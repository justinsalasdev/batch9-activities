import { createContext, useReducer } from "react";
import shoutsReducer from "../reducers/shoutsReducer";

export const shoutsStateContext = createContext();
export const shoutsDispatchContext = createContext();

const initialState = {
  isCreated: false,
  shouts: []
};

export default function ShoutsProvider({ children }) {
  const [state, dispatch] = useReducer(shoutsReducer, initialState);
  return (
    <shoutsStateContext.Provider value={state}>
      <shoutsDispatchContext.Provider value={dispatch}>{children}</shoutsDispatchContext.Provider>
    </shoutsStateContext.Provider>
  );
}
