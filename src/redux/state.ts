import { StateType, StoreType } from "./types";

export const store:StoreType = {
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
            ]
        }
    },
    getState () {
        return this._state;
    },
    _rerenderEntire (state: StateType) {},
    addPost () {
        let post = {
            id: '5',
            post: this._state.profilePage.newPostText,
        }
        this._state.profilePage.post.unshift(post);
        this._state.profilePage.newPostText = '';
        this._rerenderEntire(this._state)
    },
    updateTextArea (newText: string | undefined) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntire(this._state)
    },
    subscribe (observer: (state: StateType) => void) {
        this._rerenderEntire = observer
    }
    

}
