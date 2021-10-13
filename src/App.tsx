import React, {useState, useCallback, useMemo} from 'react';
import './App.css';
import { ChildArea } from './ChildArea'
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion'
import { Home } from './Home'
import { Page1} from './Page1'
import { Page2 } from './Page2'
import { BrowserRouter, Link, Switch , Route} from 'react-router-dom'
import {Page1DetailA} from './Page1DetailA';
import {Page1DetailB} from './Page1DetailB';
import { Router } from './router/Router'
import { UrlParameter } from './URLParameter';
import { Page404 } from './Page404';


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

        {/* react-routerのルーティング機能を機能させる */}
        <BrowserRouter>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>

         <Switch>
<Router />
<Route exact path='/'><Home /></Route>
<Route path='/page1' render={({ match : {url}}) => (

  <Switch>
    <Route exact path={url}>
  <Page1 />
  </Route>
      <Route path={`${url}/detailA`}>
  <Page1DetailA />
  </Route>
  <Route path={`${url}/detailB`}>
    <Page1DetailB />
  </Route>
  </Switch>

)}/>
<Route path='/page2'> <Page2 /></Route>
         </Switch>
      </BrowserRouter>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
  <p> {count}</p>
  <button onClick={onClickCountUp}>UP</button>
  {/* inputで子要素が再レンダリングされるのは、Reactの特徴 */}
  <input  value={text} onChange={onChangeText}/>
  {text}
  <br />
  <br />
  <button onClick={onClickOpen}> 表示</button>

  <ChildArea  open={open} onClickClose={onClickClose} />
  {/* <UrlParameter /> */}
      </header>
    </div>
  );
}

export default App;
