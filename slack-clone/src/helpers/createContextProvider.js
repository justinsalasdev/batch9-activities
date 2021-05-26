import { useReducer } from "react";

export default function (stateContext, dispatchContext, reducer, initialState) {
  return function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <stateContext.Provider value={state}>
        <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
      </stateContext.Provider>
    );
  };
}
