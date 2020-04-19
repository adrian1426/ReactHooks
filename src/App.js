import React, { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    title: 'Hola'
  });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleInput = e => {
    dispatch({ type: 'SET_TITLE', title: e.target.value });
  };


  return (
    <div className="App">
      <input
        type='text'
        placeholder='ingresa tu búsqueda'
        onChange={handleInput}
      />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>{state.count} - {state.title}</h1>
    </div>
  );
}

export default App;
