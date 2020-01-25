- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components can have state and lifecycle methods. They also have the 'this' keyword but functional components have more advantages so the main reason to use class components is if the existing codebase you were adding to or maintaining was already developed with class components. 

- [ ] Name three lifecycle methods and their purposes.

1. constructor: create components with inciting state data for the initial render.
2. Render: thing that tells react what will be mounted to the screen. The render() method is required for a class component, and without it, the component won’t work.
3. componentDidMount: This method gets called as soon as the render method is called the first time and it is called only once. It is used to set up state data living in a separate file.

- [ ] What is the purpose of a custom hook?

Lets you extract component logic into reusable functions. Helps code remain 'DRY'.

- [ ] Why is it important to test our apps?

When apps get large and complex, tests help identify issues which otherwise would take a long time to debug. Testing helps save developers time in the long run and automated tests help scale the testing.

