// const initialState = {
//   people: []
// };

export default function peopleReducer(state, action) {
  switch (action.type) {
    case "save people": {
      return { ...state, people: action.payload };
    }

    case "mark person": {
      const peopleCopy = [].concat(state.people);
      const targetIndex = state.peopleCopy.find(person => {
        person.uid === action.payload;
      });

      peopleCopy[targetIndex].checked = true;
      return { ...state, people: peopleCopy };
    }

    default: {
      console.log("people-reducer: unknown action");
    }
  }
}
