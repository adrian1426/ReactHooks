import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [click, setClick] = useState(0);

  useEffect(() => {
    console.log('dentro de useEffet, ', click);
    console.log('%c-----------------------------', 'color:green');
    return () => {
      //componentWillUnmount
      console.log('return de useEffect: ', click);
    };
  });

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click {click}</button>
    </div>
  );
}

export default App;
