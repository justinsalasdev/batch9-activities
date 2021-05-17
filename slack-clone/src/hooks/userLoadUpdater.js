import { useReducer } from "react";
import loadUpdater from "../reducers/loadUpdater";

export default function useLoadUpdater(initialState) {
  const [state, dispatch] = useReducer(loadUpdater, initialState);
  return [state, dispatch];
}
