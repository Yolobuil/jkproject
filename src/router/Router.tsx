import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';

import { Home } from './../Home'

import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';
import { Page404 } from '../components/page/Page404'
import { Top } from '../components/page/Top';
import { Users } from '../components/page/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';

export const Router = () => {
return(
         <BrowserRouter>
<Switch>
<Route exact path='/'>
  <DefaultLayout>
<Top />
</DefaultLayout>
</Route>
<Route path='/users'>
  <HeaderOnly >
<Users/>
</HeaderOnly>
</Route>
{/* <Route path='/page1' render={({ match : {url}}) => (
  <Switch>
 {page1Routes.map((route) => (
   <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
   {route.children}
   </Route>
))}
  </Switch>
)}/>
<Route path='/page2' render={({ match : {url}}) => (
  <Switch>
 {page2Routes.map((route) => (
   <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
   {route.children}
   </Route>
))}
  </Switch>
)}/> */}
{/* 全て一致→Switchで上からページを見た結果、どこにも当てはまらない場合に404に飛ばされる */}
<Route path='*'>
  {console.log('aa')}
  <Page404 />
</Route>
</Switch>
       </BrowserRouter>
)
}
