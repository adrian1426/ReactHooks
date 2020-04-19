import React, {useState, useContext} from 'react';
import './App.css';

//{Provider y Consumer}
const MyContext = React.createContext();

//Context de forma tradicional
const Nieto = () => (
  <MyContext.Consumer>
    {(context) => (
      <div>
        <h1>Nieto {context.add}</h1>
        <button onClick={context.onClickAdd}>click Nieto</button>
      </div>
    )}
  </MyContext.Consumer>
);

//context con hook useContext
const Nieto2 = () => {
  const {add, onClickAdd} = useContext(MyContext);
  return (
    <div>
      <h1>Nieto2 {add}</h1>
      <button onClick={onClickAdd}>click Nieto</button>
    </div>
  );
};

const Hijo = () => (
  <div>
    <h1>Hijo</h1>
    <Nieto />
    <Nieto2 />
  </div>
);

function App() {
  const [add, setAdd] = useState(0);

  const onClickAdd = () => setAdd(add + 1);

  return (
    <MyContext.Provider
      value={{
        add,
        onClickAdd,
      }}
    >
      <div className="App">
        <button onClick={onClickAdd}>Agregar {add} </button>
        <Hijo />
      </div>
    </MyContext.Provider>
  );
}

export default App;
