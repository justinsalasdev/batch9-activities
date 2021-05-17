import { useContext } from "react";
import { AuthStateContext } from "../../contexts/Auth";

export default function useAuthState() {
  const state = useContext(AuthStateContext);
  if (typeof state === "undefined") {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return state;
}
