
export type StoreType = {
    _state: StateType
    getState: ()=>StateType
    _rerenderEntire: (state: StateType)=>void
    addPost: ()=>void
    updateTextArea: (newText: string | undefined)=>void
    subscribe: (observer: (state: StateType)=>void)=>void
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    post: PostType[]
    newPostText: string | undefined
}

export type DialogsPageType = {
    dialog: DialogType[]
    message: MessageType[]
}

export type PostType = {
    id: string
    post: string | undefined
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}