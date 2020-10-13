### Why Use Hooks?

As React developers, we love breaking down complex problems into simple pieces.

Classes, however, are not simple. They:

are difficult to reuse between components
are tricky and time-consuming to test
have confused many developers and caused lots of bugs
The React core team heard all of this feedback from developers like us, and they engineered an incredible solution for us! React 16.8+ supports Hooks. With Hooks, we can use simple function components to do lots of the fancy things that we could only do with class components in the past. React Hooks, plainly put, are functions that let us “Hook into” state and lifecycle features directly from our function components. Hooks don’t work inside classes — they let us use fancy React features without classes. Keep in mind that React Hooks do not replace class components. They are completely optional; just a new tool that we can take advantage of. React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). See the full list in the docs. In this lesson, we’ll learn different ways to manage state in a function component.

#### Update Function Component State
Let’s get started with the State Hook, the most common Hook used for building React components. The State Hook is a named export from the React library, so we import it like this:

import React, { useState } from 'react';
useState() is a JavaScript function defined in the React library. When we call this function, it returns an array with two values:

current state - the current value of this state
state setter - a function that we can use to update the value of this state
Because React returns these two values in an array, we can assign them to local variables, naming them whatever we like. For example:

const [toggle, setToggle] = useState();
Let’s have a look at an example of a function component using the State Hook:

import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
Notice how the state setter function, setToggle(), is called by our onClick event listeners. To update the value of toggle and re-render this component with the new value, all we need to do is call the setToggle() function with the next state value as an argument.

No need to worry about binding functions to class instances, working with constructors, or dealing with the this keyword. With the State Hook, updating state is as simple as calling a state setter function.

Calling the state setter signals to React that the component needs to re-render, so the whole function defining the component is called again. The magic of useState() is that it allows React to keep track of the current value of state from one render to the next!