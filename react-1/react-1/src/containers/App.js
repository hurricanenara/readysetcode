import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
// to use CSS modules, you can change your css file name from example.css to example.module.css instead of ejecting
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
    this.state = {
      persons:[
        { id: "abc1", name: "Nara", age: 30 },
        { id: "abc2", name: "Paul", age: 3 },
        { id: "abc3", name: "Michelle", age: 20 },
      ],
      otherState: 'other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    }
    
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js cwm]')
  // }

  componentDidMount() {
    console.log('[App.js cdm]');
  }

  shouldComponentUpdate(nextProps, nextStaet) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDiduppdate');
  }

  // more modern JS syntax
  // state = {
  //   persons:[
  //     { id: "abc1", name: "Nara", age: 30 },
  //     { id: "abc2", name: "Paul", age: 3 },
  //     { id: "abc3", name: "Michelle", age: 20 },
  //   ],
  //   otherState: 'other value',
  //   showPersons: false
  // }

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

    // pass in an anonymous function to setState to guarantee accurate state update
    // for changeCounter (otherwise changeCounter state will not update as expected/predictably)
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  // bind function preferred
  render() {
    console.log('[App.js] render');
    // to add hover (which is not a css selector but rather a pseudo selector), we can use a package
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons ={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
            />
      );
      
      

      // style.backgroundColor = 'red';
      // // able to use :hover with radium
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }



    return (
      // to have access to @media queries, you must import StyleRoot and wrap
      <Aux>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
        {
          this.state.showCockpit ? <Cockpit 
            title={this.props.componentTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            // persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          /> : null
        }
        { persons }
        </AuthContext.Provider>
      </Aux>
    );
  }
}
// wrap App with Radium function
export default withClass(App, classes.App);


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