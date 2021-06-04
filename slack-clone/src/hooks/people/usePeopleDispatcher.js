import createContextTool from "../../helpers/createContextTool";
import { peopleDispatchContext } from "../../providers/People";

const usePeopleDispatcher = createContextTool(peopleDispatchContext, "people");
export default usePeopleDispatcher;
