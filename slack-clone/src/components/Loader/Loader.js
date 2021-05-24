import genClass from "../../helpers/genClass";

export default function Loader({ type }) {
  const $ = genClass("loader");
  const $$ = genClass("container");

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
  const $ = genClass("inline-loader", {});
  return (
    <span {...$()}>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
      <span {...$("box")}></span>
    </span>
  );
}
