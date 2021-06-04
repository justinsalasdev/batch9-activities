import createContextTool from "../../helpers/createContextTool";
import { lettersDispatchContext } from "../../providers/LettersProvider";

const useLetterDispatcher = createContextTool(lettersDispatchContext, "letters");
export default useLetterDispatcher;
