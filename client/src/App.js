import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [ listOfUsers, setListofUsers ] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getusers")
         .then(res => {
           setListofUsers(res.data)
         });
  }, []);

  const createUser = () => {};

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

      <form onSubmit={CreateUser}>
        <input type="text" placeholder="" />

        <button>Create User</button>
      </form>
    </div>
  );
}

export default App;
