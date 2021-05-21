import { useContext } from "react";
import { userStateContext } from "../../contexts/User";

export default function useUserState() {
  const state = useContext(userStateContext);
  if (typeof state === "undefined") {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return state;
}
