1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A1. Array.concat, Array.map, and Object.assign (when used correctly).
Object.assign will create a new object and assign it the props from another object


2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A2. The store is the state. The reducers are parts of the state which change based on the logic in the reducer that is trigged by actions that are passed to it. Actions are signals to the reducer about which instructions it should execute in order to change the state of the application. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

A3. Application state is data that's important to the application throughout whereas Component state is data important to that piece of the program alone and needn't be known, used, or passed to other parts of the application. The input from a user in an input box would be an example of something that isn't important to state until it's submitted from the form. There's no need for the Application state to know of the changing input until it's submitted.


4.  What is middleware?

A4. It's a software that acts as a bridge between the database/backend and frontend


5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A5. Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

6.  Which `react-redux` method links up our `components` with our `redux store`?

A6. I'd say it's Provider and connect
