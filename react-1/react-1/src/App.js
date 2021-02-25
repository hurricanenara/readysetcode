import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { id: "abc1", name: "Nara", age: 30 },
      { id: "abc2", name: "Paul", age: 3 },
      { id: "abc3", name: "Michelle", age: 20 },
    ],
    otherState: 'other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // update state in immutable fashion
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = Object.assign({}, this.setState.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(((person, index) => {
            return <Person
                key={person.id}
                name={person.name} 
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)}
                // click={this.deletePersonHandler.bind(this, index)}
                click={() => this.deletePersonHandler(index)} />
          }))}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch</button>
        { persons }
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