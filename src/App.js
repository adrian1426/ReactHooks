import React, {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    click: 0,
    descripcion: '',
  });

  const mergeEstado = nextState => {
    setState({
      ...state,
      ...nextState,
    });
  };

  const handleClick = () => {
    mergeEstado({
      click: state.click + 1,
    });
  };

  const onChange = e => {
    mergeEstado({
      descripcion: e.target.value,
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click {state.click}</button>
      <input type="text" onChange={onChange} />
      <label>{state.descripcion}</label>
    </div>
  );
}

export default App;
