const initState = {
    list: [
        {id:1, content:'Play FIFA'},
        {id:2, content:'Play Hocket League'},
        {id:3, content:'Read a english book'},
        {id:4, content:'Learn about React Hooks & Redux'},
        {id:5, content:'Work at 10 a.m.'},
        {id:6, content:'Drink a beer'},
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