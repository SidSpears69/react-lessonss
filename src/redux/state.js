import rerenderEntireTree from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 0 },
            { id: 2, message: "It's my first post", likesCount: 23 },
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrew" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Viktor" },
            { id: 6, name: "Valera" }
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How is your it-kamasutra?" },
            { id: 3, message: "Yo" },
        ]
    }
    
}

export let addPost = (PostMessage) => {
    let newPost = {
        id: 5,
        message: PostMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;