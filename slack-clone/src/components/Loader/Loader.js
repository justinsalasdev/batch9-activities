import genClass from "../../helpers/genClass";

export default function Loader({ type, propStyles }) {
  const $ = genClass({ block: "loader" });
  const $$ = genClass({ block: "container" });

  console.log("Loader");
  if (type === "inline") {
    return <InlineLoader propStyles={propStyles} />;
  }
  return (
    <div {...$$()}>
      <div {...$()}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

function InlineLoader({ propStyles }) {
  const $ = genClass({ block: "inline-loader", propStyles });
  return (
    <span {...$()}>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
    </span>
  );
}
