import React, { useState } from 'react';
import './App.css';

const Counter = React.memo(({ count }) => {
  console.log('Render <Counter/>');
  return (
    <h1>{count}</h1>
  );
});

const Title = React.memo(({ title }) => {
  console.log('Render <Title/>');
  return (
    <h1>{title}</h1>
  );
});

const TitleNested = React.memo(({ info }) => {
  console.log('Render <TitleNested/>');
  return (
    <h1>{info.title}</h1>
  );
}, (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
  return prevProps.info.title === nextProps.info.title;
});


function App() {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  const handleInput = e => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <input type='text' onChange={handleInput} />
      <button onClick={handleAdd}>Dispatch</button>
      <Counter count={count} />
      <Title title={title} />
      <TitleNested info={{
        title
      }} />
    </div>
  );
}

export default App;
