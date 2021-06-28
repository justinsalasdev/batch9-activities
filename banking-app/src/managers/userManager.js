import { createContext, useContext, useReducer } from "react";

const stateContext = createContext();
const dispatchContext = createContext();

const initialState = {
  uid: null,
  account: null,
  history: null,
  isLoading: true
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export function useUserDispatcher() {
  const contextValue = useContext(dispatchContext);
  if (typeof contextValue === "undefined") {
    throw new Error(`User dispatch must be used within user provider`);
  }
  return contextValue;
}

export function useUserState() {
  const contextValue = useContext(stateContext);
  if (typeof contextValue === "undefined") {
    throw new Error(`User state must be used within user provider`);
  }
  return contextValue;
}

function reducer(state, action) {
  switch (action.type) {
    case "save":
      return { ...state, ...action.payload, isLoading: false };
    case "delete":
      return { ...initialState, isLoading: false };

    default:
      console.log("user action does not exist");
      return state;
  }
}
