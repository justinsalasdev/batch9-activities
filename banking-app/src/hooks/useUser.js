import { useEffect, useReducer } from "react";

export default function useUser(userId) {
  const [userState, userDispatch] = useReducer(reducer, {
    user: null,
    isLoading: false,
    error: null
  });

  useEffect(() => {
    console.log("effect runs get user");
    async function getUser() {
      try {
        userDispatch({ type: "get" });
        const res = await fetch(`/api/users/${userId}`);
        const user = await res.json();
        userDispatch({ type: "done", payload: user });
      } catch (err) {
        console.log(err);
        userDispatch({ type: "error", payload: err });
      }
    }
    getUser();
  }, []);

  const { user, isLoading } = userState;

  return { user, isReady: user && !isLoading };
}

function reducer(state, action) {
  switch (action.type) {
    case "get":
      return { ...state, isLoading: true };
    case "done":
      return { ...state, isLoading: false, user: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      console.log("unknown get-user action");
      return state;
  }
}
