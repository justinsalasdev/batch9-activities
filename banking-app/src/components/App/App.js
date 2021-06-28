import genClass from "../../helpers/style/genClass";
import Nav from "../Nav/Nav";
import Views from "../Views/Views";
import useApp from "./useApp";
import Loader from "../Loader/Loader";

export default function App() {
  const { isLoading } = useApp();
  const $ = genClass({ block: "app" });
  return (
    <div {...$()}>
      <Nav />
      {isLoading ? <Loader /> : <Views />}
    </div>
  );
}
