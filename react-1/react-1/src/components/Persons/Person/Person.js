import React, { Component } from 'react';
import classes from './Person.css';

// no need to pass props and make into a functional component as styled.div already returns a react Component
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 10px auto;
//     border: 1px solid lightblue;
//     box-shadow: 0 2px 3px lightblue;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 600px) {
//         width: 450px;
//     }
// `;

// when using value in input, onChange must be present
class Person extends Component {
    render() {
        // const rnd = Math.random();
        // if (rnd > 0.7) {
        //     throw new Error('something went wrong');
        console.log('[Person.js] rendering...');
        // }
        return (
            // <div className="Person" style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;