import { useEffect } from "react";
import { db } from "../../firebase/firebase";
import usePeopleDispatcher from "../../hooks/people/usePeopleDispatcher";
import usePeopleState from "../../hooks/people/usePeopleState";
import useUserState from "../../hooks/user/useUserState";

export default function useGetPeople() {
  const peopleDispatch = usePeopleDispatcher();
  const peopleState = usePeopleState();
  const userState = useUserState();

  useEffect(() => {
    db.collection("Users")
      .get()
      .then(usersSnapShot => {
        const people = [];
        usersSnapShot.forEach(userDoc => {
          // doc.data() is never undefined for query doc snapshots
          if (userDoc.data().uid === userState.uid) {
            people.push({ ...userDoc.data(), name: userDoc.data().name + " (you)" });
          } else {
            people.push(userDoc.data());
          }
        });

        peopleDispatch({ type: "save people", payload: people });
      });
    // eslint-disable-next-line
  }, [userState]);

  return peopleState.people;
}
