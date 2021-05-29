import genClass from "../../helpers/genClass";

export default function Message({ content, date, isoDate }) {
  const $ = genClass({ block: "message" });
  return (
    <div {...$()}>
      <p {...$("content")}>{content}</p>
      <time dateTime={isoDate}>{date}</time>.
    </div>
  );
}
