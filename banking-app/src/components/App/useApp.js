import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import getAccount from "../../helpers/user/getAccount";
import { useUserDispatcher, useUserState } from "../../managers/userManager";

export default function useApp() {
  console.log("App");
  const navigator = useHistory();
  const userDispatch = useUserDispatcher();
  const userState = useUserState();

  useEffect(() => {
    var unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const account = await getAccount(user.uid);
        userDispatch({ type: "save", payload: { uid: user.uid, account } });
      } else {
        userDispatch({ type: "delete" });
        navigator.push("/login");
      }
    });

    return function () {
      unsubscribe(); //unsubscribe when app unmounts
    };
  }, []);

  return { isLoading: userState.isLoading };
}
