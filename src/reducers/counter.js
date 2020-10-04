const initState = {
    counter: 10
 }
 
 const counter = (state = initState, action) => {

     //INCREMENT
     switch (action.type) {
         case 'INCREMENT_COUNT':
            return {...state,counter:state.counter+1}
       case 'INCREMENT_COUNT_TEN':
            return {...state,counter:state.counter+10}

      //DECREMENT
       case 'DECREMENT_COUNT':
            return {...state,counter:state.counter-2}
       case 'DECREMENT_COUNT_TEN':
            return {...state,counter:state.counter-10}

      //MULTIPLY AND DIVIDER
        case 'MULTIPLY_COUNT':
            return {...state,counter:state.counter*3}
        case 'DIVIDER_COUNT':
            return {...state,counter:state.counter/2}

      //CLEAR
       case 'RESET_COUNT':
           return {...state,counter:0} 
       
     default:
         return state
    }
}
 
 export default counter;