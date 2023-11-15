
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

export type AddPostType = {
    addPost:()=>void
}