import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: "Nara", age: 30 },
      { name: "Paul", age: 3 },
      { name: "Michelle", age: 20 },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DO NOT DO THIS: this.state.persons[0].name = "Nara :)";
    this.setState({
      persons:[
        { name: "Nara :)", age: 30 },
        { name: "Paul", age: 30 },
        { name: newName, age: 20 },
      ]
    });
  }

  nameChangedHandler = event => {
    this.setState({
      persons:[
        { name: "Nara", age: 30 },
        { name: event.target.value, age: 30 },
        { name: "Michelle", age: 20 },
      ]
    });
  }

  // bind function preferred
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px, solid pink',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi!</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('mememe')}>Switch</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "P")}>I'm children</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;


// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons:[
//       { name: "Nara", age: 30 },
//       { name: "Paul", age: 3 },
//       { name: "Michelle", age: 20 },
//     ]
//   });
//   // use multiple useState functions!
//   const [otherState, setOtherState] = useState('some other value');

//   const switchNameHandler = () => {
//     // console.log('was clicked');
//     // DO NOT DO THIS: this.state.persons[0].name = "Nara :)";
//     setPersonsState({
//       persons:[
//         { name: "Nara :)", age: 30 },
//         { name: "Paul", age: 30 },
//         { name: "Michelle", age: 20 },
//       ]
//     });
//   }

//   console.log(personsState, otherState);
  
//   return (
//     <div className="App">
//       <h1>Hi!</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I'm children</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default app;