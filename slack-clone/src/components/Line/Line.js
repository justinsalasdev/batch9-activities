import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />
};

export default function Line(props) {
  const { id, value, type, handler } = props;

  return (
    <div className="line">
      <div className="line__div">
        <input
          className="line__field"
          id={id}
          name={id}
          type={type}
          value={value || ""}
          onChange={function (e) {
            handler(e.target.value);
          }}
        />
        <label className="line__icon" htmlFor={id}>
          {icons[id]}
        </label>
      </div>
      <p className="line__toolkit">error</p>
    </div>
  );
}
