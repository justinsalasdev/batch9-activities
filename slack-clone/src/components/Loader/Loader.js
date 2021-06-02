import genClass from "../../helpers/genClass";

export default function Loader({ propStyles, mods }) {
  const $ = genClass({ block: "loader", propStyles, mods });

  return (
    <div {...$()}>
      <div></div>
      <div></div>
    </div>
  );
}

export function InlineLoader({ propStyles, mods }) {
  const $ = genClass({ block: "inline-loader", propStyles, mods });
  return (
    <span {...$()}>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
    </span>
  );
}
