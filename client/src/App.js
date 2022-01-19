import { useState } from 'react';
import './App.css';

function App() {
  const [ listOfUsers, setListofUsers ] = useState([
    {id: 1, name: "Dave", age: 22, username: "dave10"}
  ]);

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map(user => user)}
      </div>
    </div>
  );
}

export default App;
