import React, {useState} from 'react';
import './App.css';

function App() {
   const [count,setCount] = useState(0);

const onClickCountUp = () =>{
setCount(count +1);

}

  return (
    <div className="App">
      <header className="App-header">
  <p> {count}</p>
  <button onClick={onClickCountUp}>UP</button>
      </header>
    </div>
  );
}

export default App;
