
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubsctire: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action:ActionType) => void
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
    newMessageText: string | undefined
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
    message: string | undefined
}

export type ActionType = { 
    type: string
    newText?: string | undefined
    newMessage?: string | undefined
}
