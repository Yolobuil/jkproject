import { Home } from "../components/page/Home";
import { Page404 } from "../components/page/Page404";
import { Setting } from "../components/page/Setting";
import { UserManagement } from "../components/page/UserManagement";

export const homeRoutes = [
  {
    path:'/',
    exact:true,
    children:<Home />
  },
    {
    path:'/user_management',
    exact:false,
    children:<UserManagement />
  },
      {
    path:'/setting',
    exact:false,
    children:<Setting />
  },
        {
    path:'*',
    exact:false,
    children:<Page404 />
  }
]