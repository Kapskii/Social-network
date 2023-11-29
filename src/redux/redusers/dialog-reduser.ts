import { ActionType, DialogsPageType } from "../types";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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

export const dialogReduser = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: '4',
                message: state.newMessageText,
            }
            state.message.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
            default:
                return state;
    }
}

export let sendMessageAC = () => ({ type: SEND_MESSAGE });
export let updagteNewMessageTextAC = (newMessageText: string | undefined) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessageText });