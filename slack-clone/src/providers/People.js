import { createContext, useReducer } from "react";
import peopleReducer from "../reducers/peopleReducer";

export const peopleStateContext = createContext();
export const peopleDispatchContext = createContext();

const initialState = {
  people: [],
  numSelected: 0
};

export default function PeopleProvider({ children }) {
  const [state, dispatch] = useReducer(peopleReducer, initialState);
  return (
    <peopleStateContext.Provider value={state}>
      <peopleDispatchContext.Provider value={dispatch}>{children}</peopleDispatchContext.Provider>
    </peopleStateContext.Provider>
  );
}
