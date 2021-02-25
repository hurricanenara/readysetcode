import React from 'react';
import styled from 'styled-components';
import './Person.css';

// no need to pass props and make into a functional component as styled.div already returns a react Component
const StyledDiv = styled.div`
        width: 60%;
        margin: 10px auto;
        border: 1px solid lightblue;
        box-shadow: 0 2px 3px lightblue;
        padding: 16px;
        text-align: center;

        @media (min-width: 600px) {
            width: 450px;
        }
`;

// when using value in input, onChange must be present
const person = (props) => {
    const style = {
        '@media (min-width: 700px)': {
            width: '450px'
        }
    }
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;