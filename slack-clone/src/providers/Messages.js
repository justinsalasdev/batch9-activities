import { createContext, useReducer } from "react";
import messagesReducer from "../reducers/messagesReducer";

export const messagesStateContext = createContext();
export const messagesDispatchContext = createContext();

const initialState = {
  isCreated: false,
  messages: []
};

export default function MessagesProvider({ children }) {
  const [state, dispatch] = useReducer(messagesReducer, initialState);
  return (
    <messagesStateContext.Provider value={state}>
      <messagesDispatchContext.Provider value={dispatch}>
        {children}
      </messagesDispatchContext.Provider>
    </messagesStateContext.Provider>
  );
}
