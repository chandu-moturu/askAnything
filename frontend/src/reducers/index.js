import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from "./users";
import chatReducer from "./chat";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer,usersReducer,chatReducer
})