import UserProvider from "./User";
import PeopleProvider from "./People";

export default function CombinedProvider({ children }) {
  const providers = [UserProvider, PeopleProvider];
  return providers.reduce((Provider, Current) => {
    return (
      <Current>
        <Provider>{children}</Provider>
      </Current>
    );
  });
}
