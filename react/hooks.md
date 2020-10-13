### Why Use Hooks?

As React developers, we love breaking down complex problems into simple pieces.

Classes, however, are not simple. They:

are difficult to reuse between components
are tricky and time-consuming to test
have confused many developers and caused lots of bugs
The React core team heard all of this feedback from developers like us, and they engineered an incredible solution for us! React 16.8+ supports Hooks. With Hooks, we can use simple function components to do lots of the fancy things that we could only do with class components in the past. React Hooks, plainly put, are functions that let us “Hook into” state and lifecycle features directly from our function components. Hooks don’t work inside classes — they let us use fancy React features without classes. Keep in mind that React Hooks do not replace class components. They are completely optional; just a new tool that we can take advantage of. React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). See the full list in the docs. In this lesson, we’ll learn different ways to manage state in a function component.