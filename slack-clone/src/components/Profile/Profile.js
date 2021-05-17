import Avatar from "../Avatar/Avatar";
import { FiLogOut } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="profile">
      <Avatar />
      <div className="profile__name">Justin Rafael </div>
      <button className="profile__logout">
        <FiLogOut />
      </button>
    </div>
  );
}
