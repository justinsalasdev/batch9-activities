import createContextTool from "../../helpers/createContextTool";
import { userDispatchContext } from "../../providers/User";

const useUserDispatcher = createContextTool(userDispatchContext, "user");
export default useUserDispatcher;
