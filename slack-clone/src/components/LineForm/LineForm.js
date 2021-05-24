import { BiSave } from "react-icons/bi";
import genClass from "../../helpers/genClass";
import Loader from "../Loader/Loader";

export default function LineForm({ customHook, mods }) {
  const {
    initialName,
    isLoading,
    state,
    labelRef,
    handleSubmit,
    handleChange,
    handleBlur,
    handleFocus,
    handleEscape
  } = customHook();

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
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
          />
          <label ref={labelRef} htmlFor="field" {...$("label")}>
            {initialName}
          </label>
        </div>
      )}

      {!isLoading && state && !(state === initialName) && (
        <button {...$("submit")}>
          <BiSave />
        </button>
      )}
    </form>
  );
}
