import { useReducer } from "react";

export default function Creator(props) {
  const { stateContext, dispatchContext, initialState, reducer } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </stateContext.Provider>
  );
}
