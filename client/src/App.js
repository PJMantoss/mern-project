import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ listOfUsers, setListofUsers ] = useState([
    {id: 1, name: "Dave", age: 22, username: "dave10"}
  ]);

  useEffect()

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map(user => {
          return(
            <div>
              <h1>Name: {user.name}</h1>
              <h3>Age: {user.age}</h3>
              <h3>Username: {user.username}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
