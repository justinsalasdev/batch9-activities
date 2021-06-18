import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import genClass from "../../helpers/genClass";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />
};

export default function Icon({ type, ps }) {
  const $ = genClass({ block: "icon", ps });
  return <div {...$()}>{icons[type]}</div>;
}
