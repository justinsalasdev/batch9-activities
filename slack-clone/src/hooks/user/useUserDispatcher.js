import { useContext } from "react";
import { userDispatchContext } from "../../contexts/User";

export default function useUserDispatcher() {
  const dispatch = useContext(userDispatchContext);
  if (typeof dispatch === "undefined") {
    throw new Error("useUserDispatcher must be used within a UserProvider");
  }
  return dispatch;
}
