const initState = {
    list: [
        {id:0, content: 'Play FIFA'},
        {id:1, content: 'Read a english book'},
        {id:2, content: 'Learn about React Hooks & Redux'},
    ]
}

const todolist = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state,list:[...state.list,action.payload]}

        case 'REMOVE':
            return {...state,list:action.payload}

        default:
            return state
    }
}

export default todolist