import { useContext } from "react";

//pass state context to create store hook
//pass dispatch context to create dispatcher hook
export default function (context, name) {
  return function () {
    const dispatch = useContext(context);
    if (typeof dispatch === "undefined") {
      throw new Error(`tool must be used within ${name} provider`);
    }
    return dispatch;
  };
}
