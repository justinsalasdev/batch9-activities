import createContextTool from "../../helpers/createContextTool";
import { userStateContext } from "../../providers/User";

const useUserState = createContextTool(userStateContext, "user");
export default useUserState;
