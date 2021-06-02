export default function chatReducer(state, action) {
  switch (action.type) {
    case "modify members": {
      return { ...state, status: "ready" };
    }
  }
}
