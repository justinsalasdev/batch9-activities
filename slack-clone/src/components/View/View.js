import genClass from "../../helpers/genClass";

export default function View({ children, propStyles }) {
  const $ = genClass({ block: "view", propStyles });
  return <div {...$()}>{children}</div>;
}
