import createContextTool from "../../helpers/createContextTool";
import { messagesDispatchContext } from "../../providers/Messages";

export default createContextTool(messagesDispatchContext, "messages");
