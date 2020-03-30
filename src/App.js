import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [emoji, setEmoji] = useState('emoji');

  useEffect(() => {
    alert('useEffect');
  }, [num]);

  const addNum = () => setNum(num + 1);

  const toggleEmogi = () => {
    const nextEmoji = emoji === 'emoji' ? 'emoji2' : 'emoji';
    setEmoji(nextEmoji);
  };

  return (
    <div className="App">
      <button onClick={addNum}>ADD ({num})</button>
      <button onClick={toggleEmogi}>Alter emoji</button>
      <label>{emoji}</label>
    </div>
  );
}

export default App;
