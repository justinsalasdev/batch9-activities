import { useState } from "react";
import { db, setTimeStamp } from "../../firebase/firebase";
import useLettersState from "../../hooks/letters/useLettersState";
import useLettersDispatcher from "../../hooks/letters/useLettersDispatcher";
import getLetters from "../../helpers/getLetters";
import generateString from "../../helpers/generateString";
import createDMId from "../../helpers/createDMId";

// eslint-disable-next-line
export default function (from, to) {
  return function useLetterSender(content, clearInput) {
    const [isSending, setSending] = useState(false);
    const lettersState = useLettersState(); //used in conditionals only
    const lettersDispatch = useLettersDispatcher();

    async function handleSubmit(e) {
      e.preventDefault();

      if (!content) {
        return;
      } else {
        try {
          const dmRefCol = db.collection("DMs");
          const dmRef = dmRefCol.doc(createDMId(from, to));
          const messageCol = dmRef.collection("Messages");
          const messageRef = messageCol.doc();
          const data = {
            from,
            to,
            content
          };

          setSending(true);

          if (lettersState.letters.length > 0 || lettersState.isCreated) {
            const batch = db.batch();
            await batch
              .set(messageRef, {
                ...data,
                timeStamp: setTimeStamp()
              })
              .update(dmRef, {
                watchedString: generateString()
              })
              .commit();

            console.log("Document successfully written!");
            setSending(false);
            clearInput();
          } else {
            await dmRefCol.doc("watchedDoc").set({
              watchedString: generateString()
            });

            const batch = db.batch();
            await batch
              .set(dmRef, {
                watchedString: "",
                members: [from, to]
              })
              .set(messageRef, {
                ...data,
                timeStamp: setTimeStamp()
              })
              .commit();

            console.log("New DM initiated, and first message written");
            getLetters(lettersDispatch, from, to); //fetch message on first creation of DM
            setSending(false);
            clearInput();
          }
          //if messages = [0]{} await create DM
        } catch (err) {
          console.error("Error adding document: ", err);
          setSending(false);
        }
      }
    }

    return {
      isSending,
      handleSubmit
    };
  };
}
