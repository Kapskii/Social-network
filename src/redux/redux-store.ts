import { combineReducers, legacy_createStore } from "redux";
import { profileReduser } from "./redusers/propfile-reduser";
import { dialogReduser } from "./redusers/dialog-reduser";

const redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser
});

export const store = legacy_createStore(redusers);