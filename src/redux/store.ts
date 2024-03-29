import { dialogReduser } from "./redusers/dialog-reduser";
import { profileReduser } from "./redusers/propfile-reduser";
import { ActionType, StateType, StoreType } from "./types";


export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                { id: '1', post: 'Hello World' },
                { id: '2', post: 'My name Slava Kapski' },
                { id: '3', post: 'I like React' },
                { id: '4', post: 'Good job!' },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialog: [
                { id: '1', name: 'Slava' },
                { id: '2', name: 'Olya' },
                { id: '3', name: 'Vadim' },
            ],
            message: [
                { id: '1', message: 'Hi' },
                { id: '2', message: 'How are you?' },
                { id: '3', message: 'Hello' },
            ],
            newMessageText: ''
        }
    },
    _callSubsctire(state: StateType) { },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubsctire = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
        this._callSubsctire(this._state)
    }
}