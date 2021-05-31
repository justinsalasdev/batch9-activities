// const initialState = {
//   people: []
// };

export default function peopleReducer(state, action) {
  switch (action.type) {
    case "save people": {
      return { ...state, people: action.payload };
    }

    case "mark person": {
      const newPeople = state.people.map(person => ({ ...person }));
      const targetIndex = newPeople.findIndex(person => {
        return person.uid === action.payload;
      });

      newPeople[targetIndex].checked = !newPeople[targetIndex].checked;

      return { ...state, people: newPeople };
    }

    case "reset": {
      return { ...state, people: state.people.map(person => ({ ...person, checked: false })) };
    }

    default: {
      console.log("people-reducer: unknown action");
      return { ...state };
    }
  }
}
