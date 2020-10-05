const initState = {
    counter: 10
 }
 
 const counter = (state = initState, action) => {

     //INCREMENT
     switch (action.type) {
         case 'INCREMENT_TWO':
            return {state,counter:state.counter+2}
       case 'INCREMENT_TEN':
            return {state,counter:state.counter+10}

      //DECREMENT
       case 'DECREMENT_TWO':
            return {state,counter:state.counter-2}
       case 'DECREMENT_TEN':
            return {state,counter:state.counter-10}

      //MULTIPLY AND DIVIDER
        case 'MULTIPLY_THREE':
            return {state,counter:state.counter*3}
        case 'DIVIDER_TWO':
            return {state,counter:state.counter/2}

      //CLEAR
       case 'RESET':
           return {state,counter:0} 
       
     default:
         return state
    }
}
 
 export default counter;