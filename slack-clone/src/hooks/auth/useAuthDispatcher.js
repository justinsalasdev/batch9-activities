import { useContext } from "react";
import { AuthDispatchContext } from "../../contexts/Auth";

export default function useAuthDispatcher() {
  const dispatch = useContext(AuthDispatchContext);
  if (typeof dispatch === "undefined") {
    throw new Error("useCountUpdater must be used within a CountProvider");
  }
  return dispatch;
}
