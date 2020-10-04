import React from 'react';
import MyCounter from './views/MyCounter';
import MyToDoList from './views/MyToDoList'

function App () {
    return (
        <div class="App">
            <div id="container-counter" class="container">
                <MyCounter/>
            </div>
            <div id="container-todolist" class="container">
                <MyToDoList/>
            </div>
        </div>
    )
}

export default App;
