export default function multiSelectReducer(state, action) {
  switch (action.type) {
    case "set field":
      return { ...state, fieldValue: action.payload };

    case "toggle person":
      console.log("toggle");
      const memberId = action.payload;
      const newSelected = [...state.selected];
      if (memberId === state.userId) {
        return { ...state };
      } else if (newSelected.includes(memberId)) {
        return { ...state, selected: newSelected.filter(uid => uid !== action.payload) };
      } else {
        newSelected.push(memberId);
        return { ...state, selected: newSelected };
      }

    case "reset":
      return { ...state, selected: [state.userId] };

    default:
      console.log("unknown selector action");
      return { ...state };
  }
}
