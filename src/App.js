import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users));
  }, []);

  return (
    <div className="App">
      <button>ADD</button>
    </div>
  );
}

export default App;
