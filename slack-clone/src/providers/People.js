import createContextProvider from "../helpers/createContextProvider";
import { peopleDispatchContext, peopleStateContext } from "../contexts/people";
import peopleReducer from "../reducers/peopleReducer";

export default createContextProvider(peopleStateContext, peopleDispatchContext, peopleReducer, {
  people: []
});
