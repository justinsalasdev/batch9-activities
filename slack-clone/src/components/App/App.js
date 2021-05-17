import { auth } from "../../firebase/firebase";
import Form from "../Form/Form";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  auth.onAuthStateChanged(user => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("user logged out");
    }
  });

  return (
    <>
      <Sidebar />
      <Form />
    </>
  );
}

export default App;
