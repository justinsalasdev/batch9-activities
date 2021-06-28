import genClass from "../../helpers/style/genClass";

export default function Nav() {
  const $ = genClass({
    block: "nav"
  });

  return (
    <nav {...$()}>
      <a {...$("home")}>HOME</a>

      <ul {...$("list")}>
        <li {...$("item")}>
          <a {...$("link")}>LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}
