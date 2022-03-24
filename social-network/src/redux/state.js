import logo from "../logo.svg";

let state = {
    profilePage: {
        posts: [
            {firstName: 'Александр', lastName: 'Винокуров', image: logo},
            {firstName: 'Александр', lastName: 'Винокуров', image: logo}
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

export default state