import React, {useState} from 'react';
import './App.css';

function App() {
   const [count,setCount] = useState(0);

const onClickCountUp = () =>{
  // stateの値が更新されることで、際レンダリングされる（差分のみ更新）
  // コンポーネントの値が変わった時に際レンダリングー＞差分を検知して変更を画面に反映する
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
