import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import useLineValidator from "../../hooks/useLineValidator";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />
};

export default function Line(props) {
  const { id, type, setFormData } = props;
  const [state, dispatch] = useLineValidator(id);

  const { value, errorMessage } = state;

  //run this function every render
  setFormData(id, value, errorMessage);

  return (
    <div className="line">
      <div className="line__div">
        <input
          className="line__field"
          id={id}
          name={id}
          type={type}
          value={value || ""}
          onBlur={() => dispatch({ type: "touch" })}
          onChange={function (e) {
            dispatch({ type: "update", payload: e.target.value });
          }}
        />
        <label className="line__icon" htmlFor={id}>
          {icons[id]}
        </label>
      </div>
      <p className="line__toolkit">{errorMessage}</p>
    </div>
  );
}
