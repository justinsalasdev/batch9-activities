import genClass from "../../helpers/style/genClass";
import Nav from "../Nav/Nav";
import Login from "../Login/Login";

export default function App() {
  const $ = genClass({ block: "app" });
  return (
    <div {...$()}>
      <Nav />
      <Login />
    </div>
  );
}
