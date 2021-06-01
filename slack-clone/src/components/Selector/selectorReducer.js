export default function selectorReducer(state, action) {
  switch (action.type) {
    case "set field":
      return { ...state, fieldValue: action.payload };

    case "toggle person":
      const newSelected = [...state.selected];
      if (newSelected.includes(action.payload)) {
        return { ...state, selected: newSelected.filter(uid => uid !== action.payload) };
      } else {
        newSelected.push(action.payload);
        return { ...state, selected: newSelected };
      }

    case "reset":
      return { ...state, selected: [] };

    default:
      console.log("unknown selector action");
      return { ...state };
  }
}
