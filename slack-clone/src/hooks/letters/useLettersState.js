import createContextTool from "../../helpers/createContextTool";
import { lettersStateContext } from "../../providers/LettersProvider";

const useLettersState = createContextTool(lettersStateContext, "letters");
export default useLettersState;
