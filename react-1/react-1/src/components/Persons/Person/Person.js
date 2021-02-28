import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

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

    constructor() {
        super();
        this.inputElementRef = React.createRef();  // newer version to create reference
    }

    // what to do if you want to focus the last input element (create anonymous function in the input tag below like so)
    // this approach only works in class components
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        // const rnd = Math.random();
        // if (rnd > 0.7) {
        //     throw new Error('something went wrong');
        console.log('[Person.js] rendering...');
        // }
        // you can structure the return jsx to be an array with each element being the html tag, but with key specified
        return (
                // <div className="Person" style={style}>
            <Aux>
                {/* <div className={classes.Person}> */}
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    {/* <input type="text" onChange={this.props.changed} value={this.props.name} ref={(inputEl) => {this.inputElement = inputEl}} */}
                    <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef} />
                {/* </div> */}
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);