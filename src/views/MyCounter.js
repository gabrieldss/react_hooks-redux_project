import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const MyCounter = () => {
  const counter = useSelector(state => state.root1.counter);
  const dispatch = useDispatch();

    return (         
        <section id="section-counter">
          
        <h3 className="center-align white-text black">My Counter</h3>
        <h5 id="init-number" className="center-align">{counter}</h5>
        <div className="row counter-btns">
        <button className="btn-small green" onClick={() => dispatch({ type: 'INCREMENT_TWO' })}>
        +2
        </button>
        <button className="btn-small green" onClick={() => dispatch({ type: 'INCREMENT_TEN' })}>
        +10
        </button>
        <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_TWO' })}>
        -2
        </button>
        <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_TEN' })}>
        -10
        </button>
        <button className="btn-small purple" onClick={() => dispatch({ type: 'MULTIPLY_THREE' })}>
        x3
        </button>
        <button className="btn-small purple" onClick={() => dispatch({ type: 'DIVIDER_TWO' })}>
        /2
        </button>
        <button className="btn-small red" onClick={() => dispatch({ type: 'RESET' })}>
        Reset
        </button>
        </div>
     
        </section>
     );
}
 
export default MyCounter;