import React, {useState, useCallback, useMemo} from 'react';
import './App.css';
import { ChildArea } from './ChildArea'
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';

import { Home } from './Home'
import { Page1} from './Page1'
import { Page2 } from './Page2'
import { BrowserRouter, Link, Switch , Route} from 'react-router-dom'
import {Page1DetailA} from './Page1DetailA';
import {Page1DetailB} from './Page1DetailB';
import { Router } from './router/Router'
import {PrimaryButton} from '../src/components/atoms/button/PrimaryButton'
import {SecondaryButton} from '../src/components/atoms/button/SecondaryButton'
import {SearchInput} from '../src/components/molecules/SearchInput'
import {UserCard} from '../src/components/organisms/user/UserCard'
import { DefaultLayout} from './components/templates/DefaultLayout'
import { UserProvider } from './providers/UserProvider';
import { RecoilRoot } from 'recoil';
import axios from 'axios';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Proctice2';
import { Practice3 } from './practices/Practice3';
import { Practice4 } from './practices/Practice4';
import { Todo } from './Todo';
import {TodoType} from './types/todo'
import {Text} from './Text'

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

const users = [...Array(10).keys()].map(( val) => {
return {
  id: val,
   name: `yolo${val}`,
  image: 'https://source.unsplash.com/yihlaRCCvd4',
  email: 'aaa.co.jp',
  phone:"090-1111-2222",
  company:{
    name: 'test株式会社'
  },
  website: "https:///google.com"
}

})

const user ={
  name: 'yolo',
  image: 'https://source.unsplash.com/yihlaRCCvd4',
  email: 'aaa.co.jp',
  phone:"090-1111-2222",
  company:{
    name: 'test株式会社'
  },
  website: "https:///google.com"
}

const onClickUsers = () => {
  // axiosの後に使用したいメソッドを定義（今回はjsonplaceholderからデータを取得）
 axios.get("https://jsonplaceholder.typicode.com/users")
 // thenで正常系
 .then((result) => console.log(result.data))
 // catchで異常系
 .catch((e) => console.log(e));
}



const onClickUser1 = () => {
 // axiosの後に使用したいメソッドを定義（今回はjsonplaceholderからデータを取得）
 axios.get("https://jsonplaceholder.typicode.com/users?id=1")
 // thenで正常系
 .then((result) => console.log(result.data))
 // catchで異常系
 .catch((e) => console.log(e));
}



// TodoType型配列のstate
const [todos,setTodos] = useState<TodoType[]>([]);

const onClickTodos = () => {
 // axiosの後に使用したいメソッドを定義（今回はjsonplaceholderからデータを取得）
 // Array（配列)のTodoType型になる
 axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
 // thenで正常系
 .then((result) => setTodos(result.data))
 // catchで異常系
 .catch((e) => console.log(e));
}



  return (
//        <BrowserRouter>
// <DefaultLayout>
<RecoilRoot>
<UserProvider>

      <header className="App-header">

        {/* <SearchInput />
        <UserCard user={user}/>
        <PrimaryButton children='Primary'></PrimaryButton>
        <PrimaryButton children='test'></PrimaryButton>
        <SecondaryButton children='secondary'></SecondaryButton> */}
        {/* react-routerのルーティング機能を機能させる */}
<Router />

<button onClick={onClickUsers}>users</button>
<Text color='red' fontSize='20px' />
<Practice1></Practice1>
<Practice2/>
<Practice3 />
<Practice4 />
<button onClick={onClickTodos}>Todo</button>
{/* mapの中にはkeyが必要 */}
{todos.map((todo) => <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/> )}
<button onClick={onClickUser1}> id = 1</button>

        {/* <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>

         <Switch>

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

        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion /> */}
  {/* <p> {count}</p>
  <button onClick={onClickCountUp}>UP</button>
  inputで子要素が再レンダリングされるのは、Reactの特徴
  <input  value={text} onChange={onChangeText}/>
  {text}
  <br />
  <br />
  <button onClick={onClickOpen}> 表示</button>

  <ChildArea  open={open} onClickClose={onClickClose} /> */}
  {/* <UrlParameter /> */}
      </header>
 {/* </DefaultLayout>
</BrowserRouter>*/}
    </UserProvider>
    </RecoilRoot>
  );
}

export default App;
