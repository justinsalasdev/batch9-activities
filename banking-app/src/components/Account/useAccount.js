import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import getAccount from "../../helpers/user/getAccount";
import getHistory from "../../helpers/user/getHistory";
import { useUserDispatcher, useUserState } from "../../managers/userManager";
let subscribed = false;

export default function useAccount() {
  const userState = useUserState();
  const { uid, account } = userState;
  const [isStarted, setStarted] = useState(false);
  const userDispatch = useUserDispatcher();
  useEffect(() => {
    const accountRef = db.collection("Accounts").doc(account.account);
    if (subscribed) {
      return;
    }
    accountRef.onSnapshot(async doc => {
      subscribed = true;
      try {
        if (doc) {
          const latestAcc = await getAccount(uid);
          const history = await getHistory(latestAcc.account);
          userDispatch({
            type: "save",
            payload: { account: latestAcc, history }
          });
        } else {
          console.log("failed to get account data");
        }
      } catch (err) {
        console.log(err);
      }
    });

    // eslint-disable-next-line
  }, []);

  return {
    isStarted,
    account: account.account,
    name: account.name,
    balance: account.balance,
    handleCancel: () => setStarted(false),
    handleStart: () => setStarted(true)
  };
}
