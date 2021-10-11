import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';

import { Home } from './../Home'

import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';

export const Router = () => {
return(
   <BrowserRouter>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>
         <Switch>
<Route exact path='/'><Home /></Route>
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
</Switch>
      </BrowserRouter>)
}
