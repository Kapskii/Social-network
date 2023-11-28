import { ActionType, DialogsPageType } from "../types";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogReduser = (state: DialogsPageType, action: ActionType) => {
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