import { ActionType, ProfilePageType } from "../types";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXT-AREA';

export const profileReduser = (state: ProfilePageType, action: ActionType) => {
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
