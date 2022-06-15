import { combineReducers } from "redux";
import todosReducer from "./todo.slice";

export default combineReducers({
  todos: todosReducer,
});
