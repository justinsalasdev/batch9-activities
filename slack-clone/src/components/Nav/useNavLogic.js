import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase/firebase";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";

export default function useNavLogic() {
  const userState = useUserState();
  const peopleDispatch = usePeopleDispatcher();
  const peopleState = usePeopleState();
  const navigator = useHistory();
  // eslint-disable-next-line
  const channels = [];

  useEffect(() => {
    db.collection("Users")
      .get()
      .then(querySnapshot => {
        const people = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          if (doc.data().uid === userState.uid) {
            people.push({ ...doc.data(), name: doc.data().name + " " + "(you)" });
          } else {
            people.push(doc.data());
          }
        });
        peopleDispatch({ type: "save people", payload: people });
      });
    // eslint-disable-next-line
  }, [userState]);

  return {
    userId: userState.uid,
    userDisplayName: userState.displayName,
    navigator,
    channels,
    people: peopleState.people
  };
}
