import { StateType } from "./types";

let rerenderEntire = (state:StateType) => {}

export const state:StateType = {
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
        ]
    }
}
console.log(state);


export const addPost = () => {
let post = {
    id: '5',
    post: state.profilePage.newPostText,
}
state.profilePage.post.unshift(post);
state.profilePage.newPostText = '';
rerenderEntire(state)
}

export const updateTextArea = (newText:string | undefined) => {
    state.profilePage.newPostText = newText;
    rerenderEntire(state)
    }


    export const subscribe = (observer:any) => {
        rerenderEntire = observer
    }


