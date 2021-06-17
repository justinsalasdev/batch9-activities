import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import genClass from "../../helpers/genClass";

const icons = {
  email: <AiOutlineMail />,
  password: <RiLockPasswordLine />
};

export default function Icon({ type }) {
  const $ = genClass({ block: "icon" });
  return <div {...$()}>{icons[type]}</div>;
}
