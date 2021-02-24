import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons:[
      { name: "Nara", age: 30 },
      { name: "Paul", age: 3 },
      { name: "Michelle", age: 20 },
    ]
  });
  // use multiple useState functions!
  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // console.log('was clicked');
    // DO NOT DO THIS: this.state.persons[0].name = "Nara :)";
    setPersonsState({
      persons:[
        { name: "Nara :)", age: 30 },
        { name: "Paul", age: 30 },
        { name: "Michelle", age: 20 },
      ]
    });
  }

  console.log(personsState, otherState);
  
  return (
    <div className="App">
      <h1>Hi!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I'm children</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
// class App extends Component {
//   state = {
//     persons:[
//       { name: "Nara", age: 30 },
//       { name: "Paul", age: 3 },
//       { name: "Michelle", age: 20 },
//     ]
//   }

  // switchNameHandler = () => {
  //   // console.log('was clicked');
  //   // DO NOT DO THIS: this.state.persons[0].name = "Nara :)";
  //   this.setState({
  //     persons:[
  //       { name: "Nara :)", age: 30 },
  //       { name: "Paul", age: 30 },
  //       { name: "Michelle", age: 20 },
  //     ]
  //   });
  // }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi!</h1>
//         <button onClick={this.switchNameHandler}>Switch</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm children</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//   }
// }

// export default App;
