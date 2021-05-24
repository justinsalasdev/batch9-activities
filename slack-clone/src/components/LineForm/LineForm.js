import { BiSave } from "react-icons/bi";
import genClass from "../../helpers/genClass";
import useNameChanger from "../../hooks/useNameChanger";
import Loader from "../Loader/Loader";

export default function LineForm({ initialName, mods, face }) {
  console.log("LineForm");
  const { isLoading, state, labelRef, handleSubmit, handleChange, handleEscape } = useNameChanger(
    initialName,
    face
  );

  const $ = genClass("line-form", mods);

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
