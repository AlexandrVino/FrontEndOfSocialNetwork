import logo from "../logo.svg";

const ADD_POST = 'ADD-POST'


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                firstName: 'Александр', lastName: 'Винокуров', image: logo, message: action.postMessage
            }
            state.posts.unshift(newPost)
            break
    }
    return state
}

export let addPostActionCreator = (props) => {
    return {
        type: 'ADD-POST',
        postMessage: props.postMessage
    }
}

export default profileReducer;