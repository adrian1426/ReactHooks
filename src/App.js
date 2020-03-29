import React,{useState} from 'react';
import './App.css';

function App() {

  const [click,setClick] = useState(0);

  const addClick = () =>{
    setClick(click + 1)
  }

  return (
    <div className="App">
      <button 
        onClick={addClick}
      >
        Clicks ({click}) 
      </button>
    </div>
  );

}

export default App;
