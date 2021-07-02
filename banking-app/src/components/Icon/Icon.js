import { MdEmail, MdDateRange } from "react-icons/md";
import { RiLockPasswordFill, RiQuillPenLine } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { SiFirebase, SiFramer } from "react-icons/si";
import {
  BsInfoSquareFill,
  BsFillPersonPlusFill,
  BsPlusCircle
} from "react-icons/bs";
import { IoMdSend, IoLogoBitcoin, IoLogoSass } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineNumber, AiOutlineDelete } from "react-icons/ai";
import genClass from "../../helpers/style/genClass";

//migration-done
const icons = {
  account: <AiOutlineNumber />,
  add: <BsFillPersonPlusFill />,
  amount: <IoLogoBitcoin />, //duplicated userd in Spender
  balance: <IoLogoBitcoin />,
  cancel: <ImCancelCircle />,
  date: <MdDateRange />,
  delete: <AiOutlineDelete />,
  description: <RiQuillPenLine />,
  email: <MdEmail />,
  firebase: <SiFirebase />,
  framer: <SiFramer />,
  info: <BsInfoSquareFill />,
  name: <HiUserCircle />,
  password: <RiLockPasswordFill />,
  plus: <BsPlusCircle />,
  sass: <IoLogoSass />,
  send: <IoMdSend />,
  none: ""
};

export default function Icon({ type, ps }) {
  const $ = genClass({ block: "icon", ps });
  return <div {...$()}>{icons[type]}</div>;
}
