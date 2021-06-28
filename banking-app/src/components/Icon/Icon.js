import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { SiFirebase, SiFramer } from "react-icons/si";
import { BsInfoSquareFill, BsFillPersonPlusFill } from "react-icons/bs";
import { IoMdSend, IoLogoBitcoin, IoLogoSass } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineNumber } from "react-icons/ai";
import { GoDiffAdded } from "react-icons/go";
import genClass from "../../helpers/style/genClass";

//migration-done
const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />,
  name: <HiUserCircle />,
  account: <AiOutlineNumber />,
  balance: <IoLogoBitcoin />,
  info: <BsInfoSquareFill />,
  add: <BsFillPersonPlusFill />,
  plus: <GoDiffAdded />,
  send: <IoMdSend />,
  cancel: <ImCancelCircle />,
  sass: <IoLogoSass />,
  firebase: <SiFirebase />,
  framer: <SiFramer />,
  none: ""
};

export default function Icon({ type, ps }) {
  const $ = genClass({ block: "icon", ps });
  return <div {...$()}>{icons[type]}</div>;
}
