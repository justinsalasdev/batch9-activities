import genClass from "../../helpers/genClass";

export default function Button({ type, text, clickHandler, ps }) {
  const $ = genClass({ block: "button", ps });
  return (
    <button {...$()} onClick={clickHandler} type={type}>
      {text}
    </button>
  );
}
