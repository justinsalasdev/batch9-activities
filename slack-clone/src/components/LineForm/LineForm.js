import { useEffect } from "react";
import { BiSave } from "react-icons/bi";
import genClass from "../../helpers/genClass";
import useNameChanger from "../../hooks/useNameChanger";
import Loader from "../Loader/Loader";

export default function LineForm({ initialName, mods }) {
  console.log("LineForm");
  const {
    isLoading,
    state,
    labelRef,
    handleSubmit,
    handleChange,
    handleBlur,
    handleFocus,
    handleEscape
  } = useNameChanger(initialName);

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
