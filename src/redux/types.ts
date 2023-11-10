
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    post: PostType[]
}

export type DialogsPageType = {
    dialog: DialogType[]
    message: MessageType[]
}

export type PostType = {
    id: string
    post: string
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type AddPostType = {
    addPost:()=>void
}