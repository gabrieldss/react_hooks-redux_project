import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const MyCounter = () => {
  const counter = useSelector(state => state.root1.counter);
  
  const dispatch = useDispatch();

    return (         
        <section id="section-counter">
        <h3 class="center-align white-text black">My Counter</h3>
        <h5 id="init-number" class="center-align">{counter}</h5>
        <div class="row counter-btns">
        <button className="btn-small green" onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}>
        +2
        </button>
        <button className="btn-small green" onClick={() => dispatch({ type: 'INCREMENT_COUNT_TEN' })}>
        +10
        </button>
        <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}>
        -2
        </button>
        <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_COUNT_TEN' })}>
        -10
        </button>
        <button className="btn-small purple" onClick={() => dispatch({ type: 'MULTIPLY_COUNT' })}>
        x3
        </button>
        <button className="btn-small purple" onClick={() => dispatch({ type: 'DIVIDER_COUNT' })}>
        /2
        </button>
        <button className="btn-small red" onClick={() => dispatch({ type: 'RESET_COUNT' })}>
        Reset
        </button>
        </div>
     
        </section>
     );
}
 
export default MyCounter;