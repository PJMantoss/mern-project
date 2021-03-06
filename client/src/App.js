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
    const newUser = {
      name,
      age,
      username
    };

    Axios.post("http://localhost:3001/createuser", newUser).then(res => {
      setListofUsers([
        ...listOfUsers,
        newUser
      ]);
      alert("User Created!");
    })
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map(user => {
          return(
            <div>
              <h2>Name: {user.name}</h2>
              <h3>Age: {user.age}</h3>
              <h3>Username: {user.username}</h3>
            </div>
          )
        })}
      </div>

      <form onSubmit={createUser}>
        <input 
           type="text" 
           placeholder="Name..." 
           onChange={e => setName(e.target.value)}
        />
        <input 
           type="text" 
           placeholder="Age..." 
           onChange={e => setAge(e.target.value)}
        />
        <input 
           type="text" 
           placeholder="Username..." 
           onChange={e => setUsername(e.target.value)}
        />

        <button>Create User</button>
      </form>
    </div>
  );
}

export default App;
