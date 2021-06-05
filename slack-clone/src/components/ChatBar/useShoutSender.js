import { useState } from "react";
import { db, setTimeStamp } from "../../firebase/firebase";
import generateString from "../../helpers/generateString";

export default function (from, chatId) {
  return function useShoutSender(content, clearInput) {
    const [isSending, setSending] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();

      if (!content) {
        return;
      } else {
        try {
          //db references
          const channelsColRef = db.collection("Channels");
          const channelRef = channelsColRef.doc(chatId);
          const shoutsColRef = channelRef.collection("Shouts");
          const shoutRef = shoutsColRef.doc(); //to auto generate doc Id

          setSending(true);

          const batch = db.batch();
          await batch
            .set(shoutRef, {
              from,
              content,
              timeStamp: setTimeStamp()
            })
            .update(channelRef, {
              watchedString: generateString()
            })
            .commit();

          console.log("Shout successfully sent!");
          setSending(false);
          clearInput();

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
