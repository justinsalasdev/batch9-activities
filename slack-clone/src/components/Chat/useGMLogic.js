export default function usePMLogic(props) {
  const messagesDispatch = useMessagesDispatcher();

  const chatId = props.match.params.id;
  const chatName = props.location.state?.chatName || "";

  return {
    uidFrom,
    uidTo,
    chatName
  };
}
