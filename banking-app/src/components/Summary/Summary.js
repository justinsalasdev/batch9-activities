import genClass from "../../helpers/style/genClass";

export default function Summary() {
  const $ = genClass({ block: "summary" });
  return <div {...$()}>summary</div>;
}
