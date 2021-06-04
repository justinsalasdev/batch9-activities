import createContextTool from "../../helpers/createContextTool";
import { shoutsStateContext } from "../../providers/ShoutsProvider";

const useShoutState = createContextTool(shoutsStateContext, "shouts");
export default useShoutState;
