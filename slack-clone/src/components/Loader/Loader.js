import genClass from "../../helpers/genClass";

export default function Loader({ type }) {
  const $ = genClass({ block: "loader" });
  const $$ = genClass({ block: "container" });

  console.log("Loader");
  if (type === "inline") {
    return <InlineLoader />;
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

function InlineLoader() {
  const $ = genClass({ block: "inline-loader" });
  return (
    <span {...$()}>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
    </span>
  );
}
