import React from 'react';
import Footer from './component/Footer';
import MyCounter from './views/MyCounter';
import MyToDoList from './views/MyToDoList'

function App () {
    return (
        <div className="App">
            <div id="container-todolist" className="container">
                <MyToDoList/>
            </div>
            <div id="container-counter" className="container">
                <MyCounter/>
            </div>
                <Footer/>
        </div>
    )
}

export default App;
