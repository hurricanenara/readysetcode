### Why Use useEffect?
Before Hooks, function components were only used to accept data in the form of props and return some JSX to be rendered. In the last lesson, we defined function components that use the State Hook to manage dynamic data in the form of component state. In this lesson, we’ll use the Effect Hook to run some JavaScript code after each render.

A few reasons why we may want to run some code after each render:

* fetch data from a backend service
* subscribe to a stream of data
* manage timers and intervals
* read from and make changes to the DOM
If you’ve worked with class components’ lifecycle methods, think of the Effect Hook as componentDidMount(), componentDidUpdate(), and componentWillUnmount() all combined into one. useEffect() is a function that we’ll use to execute some code after the first render, after each re-render, and after the last render of a function component. Later in this lesson, we’ll learn how to fine-tune exactly when this code is executed even further.