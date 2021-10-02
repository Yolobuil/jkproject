import React, {useState, useCallback} from 'react';
import './App.css';
import {ChildArea} from './ChildArea'

function App() {
   const [count,setCount] = useState(0);
   const [text,setText] = useState('');
   const [open , setOpen] = useState(false);

const onClickCountUp = () =>{
  // stateの値が更新されることで、際レンダリングされる（差分のみ更新）
  // コンポーネントの値が変わった時に際レンダリングー＞差分を検知して変更を画面に反映する
setCount(count +1);

}



const onClickOpen = () =>{
setOpen(!open);
}

const onChangeText = (e: any) => {
  setText(e.target.value);
}


//　再レンダリングされたら上からアロー関数が再生成される
const onClickClose = useCallback(() => {
  setOpen(false);
}, []);

  return (
    <div className="App">
      <header className="App-header">
  <p> {count}</p>
  <button onClick={onClickCountUp}>UP</button>
  {/* inputで子要素が再レンダリングされるのは、Reactの特徴 */}
  <input  value={text} onChange={onChangeText}/>
  {text}
  <br />
  <br />
  <button onClick={onClickOpen}> 表示</button>

  <ChildArea  open={open} onClickClose={onClickClose} />
      </header>
    </div>
  );
}

export default App;
