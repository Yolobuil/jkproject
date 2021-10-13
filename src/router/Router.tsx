import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';

import { Home } from './../Home'

import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';
import { Page404 } from './../Page404'

export const Router = () => {
return(
<Switch>
<Route exact path='/'>
  <Home />
</Route>
<Route path='/page1' render={({ match : {url}}) => (
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
)}/>
{/* 全て一致→Switchで上からページを見た結果、どこにも当てはまらない場合に404に飛ばされる */}
<Route path='*'>
  {console.log('aa')}
  <Page404 />
</Route>
</Switch>
)
}
