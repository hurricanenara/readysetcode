import React, { Component } from 'react';
import classes from './App.css';
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

    // to add hover (which is not a css selector but rather a pseudo selector), we can use a package

    let persons = null;
    let btnClass = '';
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
      
      btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // // able to use :hover with radium
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // dynamically add classes
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
      // to have access to @media queries, you must import StyleRoot and wrap
      <div className={classes.App}>
        <h1>Hi!</h1>
        <p className={assignedClasses.join(' ')}>Mic test</p>
        <button 
          // style={style}
          // alt={this.state.showPersons}
          className={btnClass}
          onClick={this.togglePersonsHandler}>Switch</button>
        { persons }
      </div>
    );
  }
}
// wrap App with Radium function
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