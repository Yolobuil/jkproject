import React,{memo} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../components/page/Login'
import { Page404 } from '../components/page/Page404'
import { HeaderLayout } from '../components/templates/HeaderLayout'
import { homeRoutes } from './HomeRouters'

export const ChakraRouter:React.FC = memo(() => {

return (

  <Switch>
    <Route exact path='/'>
      <Login />
    </Route>
     <Route path='/home' render={({match:{url}}) => (
       <Switch>
         {homeRoutes.map((route) =>
         <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
           <HeaderLayout children={route.children} />
         </Route>
         )}
       </Switch>
     )} />
        <Route path='*'>
      <Page404 />
    </Route>
  </Switch>

)})