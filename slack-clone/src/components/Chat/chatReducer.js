export default function chatReducer(state, action) {
  switch (action.type) {
    case "start": {
      return { ...state, status: "ready" };
    }
  }
}
