import genClass from "../../helpers/genClass";
import useSelectorLogic from "./useSelectorLogic";

export default function Selector() {
  const { handleChange, fieldValue, searchItems } = useSelectorLogic();
  const $ = genClass({ block: "selector" });
  return (
    <div {...$()}>
      <label htmlFor="selector__field">To</label>
      <input
        onChange={handleChange}
        id="selector__field"
        {...$("field")}
        value={fieldValue || ""}
      />
      <ul>
        {searchItems.map(({ item }) => {
          return <li key={item.uid}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
