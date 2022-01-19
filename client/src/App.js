import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [ listOfUsers, setListofUsers ] = useState([]);
  const [ name, setName ] = useState("");
  const [ age, setAge ] = useState(0);
  const [ username, setUsername ] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getusers")
         .then(res => {
           setListofUsers(res.data)
         });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createuser", {}).then(res => {
      alert("User Created!");
    })
  };

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

      <form onSubmit={createUser}>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Age..." />
        <input type="text" placeholder="Username..." />

        <button>Create User</button>
      </form>
    </div>
  );
}

export default App;
