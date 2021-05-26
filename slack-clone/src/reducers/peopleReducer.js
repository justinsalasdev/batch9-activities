// const initialState = {
//   people: []
// };

export default function peopleReducer(state, action) {
  switch (action.type) {
    case "save people": {
      return { ...state, people: action.payload };
    }

    default: {
      console.log("people-reducer: unknown action");
    }
  }
}
