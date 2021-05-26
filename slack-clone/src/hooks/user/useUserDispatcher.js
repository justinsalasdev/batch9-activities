import createContextTool from "../../helpers/createContextTool";
import { userDispatchContext } from "../../providers/User";

export default createContextTool(userDispatchContext, "user");
