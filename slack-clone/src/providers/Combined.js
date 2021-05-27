import UserProvider from "./User";
import PeopleProvider from "./People";

// export default function CombinedProvider({ children }) {
//   const providers = [UserProvider, PeopleProvider];
//   return providers.reduce((Provider, Current) => {
//     return (
//       <Current>
//         <Provider>{children}</Provider>
//       </Current>
//     );
//   });
// }

export default function CombinedProvider({ children }) {
  let Combined = null;
  const providers = [UserProvider, PeopleProvider];
  providers.forEach((Provider, index) => {
    if (index === 0) {
      Combined = <Provider>{children}</Provider>;
    } else {
      Combined = <Provider>{Combined}</Provider>;
    }
  });

  return Combined;
}
