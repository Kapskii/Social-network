import { ActionType, ProfilePageType } from "../types";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXT-AREA';

const initialState = {
    post: [
        { id: '1', post: 'Hello World' },
        { id: '2', post: 'My name Slava Kapski' },
        { id: '3', post: 'I like React' },
        { id: '4', post: 'Good job!' },
    ],
    newPostText: '',
}

export const profileReduser = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: '5',
                post: state.newPostText,
            }
            state.post.unshift(post);
            state.newPostText = '';
            return state;
        case UPDATE_TEXTAREA:
            state.newPostText = action.newText;
            return state;
            default:
                return state;
    }
}

export let addPostAC = () => ({ type: ADD_POST });
export let updagteTextareaAC = (newText: string | undefined) => ({ type: UPDATE_TEXTAREA, newText: newText });
