export default function Loader({ type }) {
  console.log("Loader");
  if (type === "inline") {
    return <InlineLoader />;
  }
  return (
    <div className="container">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

function InlineLoader() {
  return (
    <span className="inline-loader">
      <span className="inline-loader__box"></span>
      <span className="inline-loader__box"></span>
      <span className="inline-loader__box"></span>
    </span>
  );
}
