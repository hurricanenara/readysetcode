import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  // runs when component is created and every time app.js is updated
  // cdm and cdu in one function
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  // });

  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   setTimeout(() => {
  //     alert('Saved data to cloud');
  //   }, 1000);
  // }, [props.persons]); // second arg of [] to prevent firing every single time, and you can have multiple dependencies in the second arg array
  
  //to make useEffect fire only the first time, pass in an empty array
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
  }, []);
  
    // dynamically add classes
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Mic test</p>
            <button 
              // style={style}
              // alt={this.state.showPersons}
              className={btnClass}
              onClick={props.clicked}>Switch</button>        
        </div>
    );
}

export default cockpit;