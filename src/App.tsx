import React, {useState, useCallback, useMemo} from 'react';
import './App.css';
import {ChildArea} from './ChildArea'
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';

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

// 計算は最初に読み込まれた時にだけ行われて、あとはずっと４のまま使いまわされる（使う機会はあまりない）
// 処理の中に変数があれば、[]のなかにそれを設定し、その変数が変わった時だけ再計算するというやり方で工夫できる
const tmp = useMemo(()=> 1+ 3, []);
console.log(tmp)

  return (
    <div className="App">
      <header className="App-header">
        <InlineStyle />
        <CssModules />
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
