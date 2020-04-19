import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user) => {
        setUsers(user);
        setFetching(false);
      });
  }, []);

  return (
    <div className="App">
      {fetching && <h1>Cargando...</h1>}
      <ul>
        {users.map((usr, i) => (
          <li key={i}>{usr.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
