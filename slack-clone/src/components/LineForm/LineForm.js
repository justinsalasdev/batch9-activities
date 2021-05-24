import { BiSave } from "react-icons/bi";
import Loader from "../Loader/Loader";

export default function LineForm({ customHook }) {
  console.log("LineForm");
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

  return (
    <form className="line-form profile__name" onSubmit={handleSubmit}>
      {isLoading ? (
        <Loader type="inline" />
      ) : (
        <div className="line-form__div">
          <input
            spellCheck="false"
            className="line-form__field"
            type="text"
            id="field"
            value={state || ""}
            onKeyDown={handleEscape}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
          />
          <label ref={labelRef} htmlFor="field" className="line-form__label">
            {initialName}
          </label>
        </div>
      )}

      {!isLoading && state && !(state === initialName) && (
        <button className="line-form__submit">
          <BiSave />
        </button>
      )}
    </form>
  );
}
