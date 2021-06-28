import { useEffect, useReducer } from "react";
import { useSession } from "next-auth/client";

export default function useUsers() {
  const [session, loading] = useSession();
  const [usersState, usersDispatch] = useReducer(reducer, {
    users: null,
    isLoading: false,
    error: null
  });
  useEffect(() => {
    console.log("runs");
    usersDispatch({ type: "get" });
    async function getUser() {
      try {
        const res = await fetch(`/api/users/`);
        const result = await res.json();
        usersDispatch({ type: "done", payload: result.users });
      } catch (err) {
        usersDispatch({ type: "error", payload: "error getting users" });
      }
    }
    getUser();
  }, []);

  return {
    isAllowed: session ? true : false,
    isReady: !loading && !usersState.isLoading,
    users: usersState.users
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "get":
      return { ...state, isLoading: true };
    case "done":
      return { ...state, isLoading: false, users: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      console.log("unknown get-users action");
      return state;
  }
}
