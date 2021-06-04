import createContextTool from "../../helpers/createContextTool";
import { peopleStateContext } from "../../providers/People";

const usePeopleState = createContextTool(peopleStateContext, "people");
export default usePeopleState;
