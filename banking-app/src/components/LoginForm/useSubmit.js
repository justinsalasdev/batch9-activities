import { useReducer } from "react";
import { db } from "../../firebase/firebase";
import isClean from "../../helpers/isClean";

export default function useSubmit(formData, formErrors) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    userData: null,
    error: null
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (isClean(formErrors)) {
        console.log(formData);
        //   console.log("proceed");
        const { email, password } = formData;
        const snapshots = await db
          .collection("Users")
          .where("email", "==", email)
          .where("password", "==", password)
          .get();

        console.log(snapshots);
        snapshots.forEach(doc => console.log(doc.id, doc.data()));
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return { isLoading: state.isLoading, error: state.error, handleSubmit };
}

function reducer(state, action) {
  switch (action.type) {
    case "start": {
      return { ...state, isLoading: true };
    }

    case "error": {
      return { ...state, error: action.payload, isLoading: false };
    }

    case "done": {
      return { ...state, userData: action.payload, isLoading: false };
    }
  }
}
