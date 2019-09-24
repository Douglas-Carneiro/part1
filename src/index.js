import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return(
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    const year = 2019
    const birth = 1996
    const name = 'Jack'
    const age = 10
    return(
    <div>
        <h1>Greetings</h1>
        <Hello name="Douglas" age={13+10}/>
        <Hello name={name} age={age} />
        <p>
            Douglas, you was born in {birth}, you're {year - birth} years old!
        </p>
        <p>
            {name}, you was born in {2019 - age}
        </p>
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

