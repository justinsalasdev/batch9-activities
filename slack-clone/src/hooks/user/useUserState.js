import createContextTool from "../../helpers/createContextTool";
import { userStateContext } from "../../providers/User";

export default createContextTool(userStateContext, "user");
