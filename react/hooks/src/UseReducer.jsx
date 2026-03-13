/**
 * The `useReducer` hook is similar to the `useState` hook,
 * but is used when you need to update state based on the previous state.
 * It accepts a reducer function and an optional initial state.
 * The reducer function takes in the current state and an action, and returns a new state.
 * The hook returns the current state and a dispatch function, which can be used to send actions to the reducer.
 * The dispatch function is used to send actions to the reducer, which then updates the state accordingly.
 * The state is updated when the component re-renders, and the new state is passed as an argument to the reducer function.
 * 
 * Example usage:
 * 
 * const [state, dispatch] = useReducer(reducer, initialState);
 * 
 * const reducer = (state, action) => {
 *   switch (action.type) {
 *     case 'INCREMENT':
 *       return { count: state.count + 1 };
 *     case 'DECREMENT':
 *       return { count: state.count - 1 };
 *     default:
 *       throw new Error();
 *   }
 * };
 * 
 * const initialState = { count: 0 };
 * 
 * dispatch({ type: 'INCREMENT' });
 * dispatch({ type: 'DECREMENT' });
 */
