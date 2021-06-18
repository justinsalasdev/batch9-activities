import genClass from "../../helpers/genClass";
import LoginForm from "../LoginForm/LoginForm";

export default function App() {
  const $ = genClass({ block: "app" });
  return (
    <div {...$()}>
      <LoginForm />
    </div>
  );
}
