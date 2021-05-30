import UserProvider from "./User";
import PeopleProvider from "./People";
import MessagesProvider from "./Messages";

export default function CombinedProvider({ children }) {
  let Combined = null;
  const providers = [UserProvider, PeopleProvider, MessagesProvider];
  providers.forEach((Provider, index) => {
    if (index === 0) {
      Combined = <Provider>{children}</Provider>;
    } else {
      Combined = <Provider>{Combined}</Provider>;
    }
  });

  return Combined;
}
