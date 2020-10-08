const initState = {
    list: [
        {id:0, content: 'Play FIFA'},
        {id:1, content: 'Play Hocket League'},
        {id:2, content: 'Read a english book'},
        {id:3, content: 'Learn about React Hooks & Redux'},
        {id:4, content: 'Work at 10 a.m.'},
        {id:5, content: 'Drink a beer'},
    ]
}

const todolist = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {state,list:[...state.list,action.payload]}

        case 'REMOVE':
            return {state,list:action.payload}

        default:
            return state
    }
}

export default todolist