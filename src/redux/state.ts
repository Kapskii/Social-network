import { StateType } from "./types";

export const state:StateType = {
    profilePage: {
        post: [
            { id: '1', post: 'Hello World' },
            { id: '2', post: 'My name Slava Kapski' },
            { id: '3', post: 'I like React' },
            { id: '4', post: 'Good job!' },
        ]
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


export const addPost = (text:string) => {
let post = {
    id: '5',
    post: text
}
state.profilePage.post.push(post)
}
