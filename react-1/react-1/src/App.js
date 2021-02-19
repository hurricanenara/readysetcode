import React, { Component } from 'react';
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

  switchNameHandler = () => {
    // console.log('was clicked');
    // DO NOT DO THIS: this.state.persons[0].name = "Nara :)";
    this.setState({
      persons:[
        { name: "Nara :)", age: 30 },
        { name: "Paul", age: 30 },
        { name: "Michelle", age: 20 },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm children</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
