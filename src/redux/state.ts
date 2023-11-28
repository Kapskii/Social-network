import { ActionType, StateType, StoreType } from "./types";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXT-AREA';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        if (action.type === ADD_POST) {
            let post = {
                id: '5',
                post: this._state.profilePage.newPostText,
            }
            this._state.profilePage.post.unshift(post);
            this._state.profilePage.newPostText = '';
            this._callSubsctire(this._state)
        } else if (action.type === UPDATE_TEXTAREA) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsctire(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let message = {
                id: '4',
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.message.push(message);
            this._state.dialogsPage.newMessageText = '';
            this._callSubsctire(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubsctire(this._state)
        }
    }
}

export let addPostAC = () => ({type: ADD_POST});
export let updagteTextareaAC = (newText: string | undefined) => ({type: UPDATE_TEXTAREA, newText: newText});

export let sendMessageAC = () => ({type: SEND_MESSAGE});
export let updagteNewMessageTextAC = (newMessageText: string | undefined) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessageText});