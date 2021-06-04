import createContextTool from "../../helpers/createContextTool";
import { shoutsDispatchContext } from "../../providers/ShoutsProvider";

const useShoutDispatcher = createContextTool(shoutsDispatchContext, "shouts");
export default useShoutDispatcher;
