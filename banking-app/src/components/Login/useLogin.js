import isClean from "../../helpers/validation/isClean";
import { useState } from "react";
import authenticate from "../../helpers/auth/authenticate";
import getAccount from "../../helpers/user/getAccount;";

export default function useLogin(formData, formErrors) {
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isClean(formErrors)) {
        const userId = await authenticate(formData);
        const account = await getAccount(userId);
        const history = await getHistory(account.account);
      } else {
        return;
      }
    } catch (err) {}
  }
  return { error, isLoading, handleSubmit };
}
