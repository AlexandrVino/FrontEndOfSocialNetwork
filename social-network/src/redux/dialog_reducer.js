import logo from "../logo.svg";

const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5, mess: action.message, author_photo: logo, author_name: 'Александр', time: '11:05', image: logo
            }
            state.dialog.messages.push(newMessage)
            break
    }
    return state
}

export let addMessageActionCreator = (props) => {
    return {
        type: 'SEND-MESSAGE',
        message: props.message
    }
}

export default dialogReducer;