import { useState } from 'react';
import './App.css';

function App() {
  const [ listOfUsers, setListofUsers ] = useState([
    {id: 1, name: "Dave", age: 22, }
  ]);

  return (
    <div className="App">
      <div className="usersDisplay"></div>
    </div>
  );
}

export default App;
