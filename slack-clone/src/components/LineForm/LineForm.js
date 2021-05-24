import { BiSave } from "react-icons/bi";
import genClass from "../../helpers/genClass";
import useLineFormLogic from "../../hooks/useLineFormLogic";
import Loader from "../Loader/Loader";

export default function LineForm({ initialName, mods, type, setAdding }) {
  console.log("LineForm");
  const { isLoading, state, labelRef, handleSubmit, handleChange, handleEscape, handleBlur } =
    useLineFormLogic(initialName, type, setAdding);

  const $ = genClass({ block: "line-form", mods });

  return (
    <form {...$()} onSubmit={handleSubmit}>
      {isLoading ? (
        <Loader type="inline" />
      ) : (
        <div {...$("div")}>
          <input
            spellCheck="false"
            {...$("field")}
            type="text"
            id="field"
            value={state || ""}
            onKeyDown={handleEscape}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label ref={labelRef} htmlFor="field" {...$("label")}>
            {state}
          </label>
        </div>
      )}

      {!isLoading && state && !(state === initialName) && (
        <button type="submit" {...$("submit")}>
          <BiSave />
        </button>
      )}
    </form>
  );
}
