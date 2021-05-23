import { useContext } from "react";
import { userStateContext } from "../../contexts/User";

export default function useUserState() {
  const state = useContext(userStateContext);
  if (typeof state === "undefined") {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return state;
}
