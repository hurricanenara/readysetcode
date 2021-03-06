import React, { Component, PureComponent } from 'react';
import Person from './Person/Person';


// using PureComponent saves shouldComponentUpdate method
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    // example of checking all props...messy
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons ||
    //          nextProps.changed !== this.props.changed ||
    //           nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { messaage: "Snapshot!" };
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    // deprecated
    // componentWillUpdate() {
    //     // ran right before componentDidUpdate
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {;
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                // click={this.deletePersonHandler.bind(this, index)}
                click={() => this.props.clicked(index)} />
        });
    }
} 

export default Persons;