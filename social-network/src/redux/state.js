import logo from "../logo.svg";
import {renderPage} from "../render";

let state = {
    profilePage: {
        posts: [
            {firstName: 'Александр', lastName: 'Винокуров', image: logo, message: 'Тест'},
            {firstName: 'Александр', lastName: 'Винокуров', image: logo, message: 'Тест'}
        ],
        friends: [
            {firstName: 'Андрей', lastName: '1', profile_photo: logo, href: '#'},
            {firstName: 'Александр', lastName: '2', profile_photo: logo, href: '#'},
            {firstName: 'Алексей', lastName: '3', profile_photo: logo, href: '#'},
            {firstName: 'Рома', lastName: '4', profile_photo: logo, href: '#'},
            {firstName: 'Данил', lastName: '5', profile_photo: logo, href: '#'},
            {firstName: 'Никита', lastName: '6', profile_photo: logo, href: '#'}
        ],
        groups: [
            {firstName: 'Группа 1', description: 'Описание группы 1', group_photo: logo, href: '#'},
            {firstName: 'Группа 2', description: 'Описание группы 2', group_photo: logo, href: '#'},
            {firstName: 'Группа 3', description: 'Описание группы 3', group_photo: logo, href: '#'},
            {firstName: 'Группа 4', description: 'Описание группы 4', group_photo: logo, href: '#'},
            {firstName: 'Группа 5', description: 'Описание группы 5', group_photo: logo, href: '#'},
            {firstName: 'Группа 6', description: 'Описание группы 6', group_photo: logo, href: '#'}
        ]

    },
    messagesPage: {
        'allMessages': [
            {id: 1, firstName: 'Александр', lastName: 'Винокуров', lastMessage: 'Пока'},
            {id: 2, firstName: 'Александр', lastName: 'Винокуров', lastMessage: 'Привет'},
            {id: 3, firstName: 'Александр', lastName: 'Винокуров', lastMessage: 'Кара'}
        ],
        'dialog': {
            id: 1,
            firstName: 'Александр',
            lastName: 'Винокуров',
            messages: [
                {id: 1, mess: 'Hi', author_photo: logo, author_name: 'Александр', time: '11:01'},
                {id: 2, mess: 'Hi', author_photo: logo, author_name: 'Алексей', time: '11:01'},
                {id: 3, mess: 'Ыыы', author_photo: logo, author_name: 'Александр', time: '11:03'},
                {id: 4, mess: 'Ууу', author_photo: logo, author_name: 'Алексей', time: '11:10'}
            ]
        }
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5, message: postMessage, likesCount: 0, firstName: 'Александр', lastName: 'Винокуров', image: logo
    }

    state.profilePage.posts.unshift(newPost)
    renderPage(state, addPost)
}

export default state