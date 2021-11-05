import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { UserFetch } from "../types/api/user";

type LoginUser = UserFetch & {isAdmin :boolean}

export type LoginUserContextType ={
  // &で型を追加することで、A＆Bの新しい型が出来上がる。
  loginUser: LoginUser | null;
  //dispatchにたしてSetStateActionoを渡して中でstateの方を定義
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

// TypeScriptのasはこの型ですよとTypeScriptに強制的に認識させられる。
export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType　);

export const LoginUserProvider = (props:{ children: ReactNode }) => {
  const {children} = props;
  const [loginUser,setLoginUser] = useState<LoginUser| null>(null);

  return(
    //Contextのvalueのどれかが更新されるとそれを使っているコンポーネント全てが再レンダリングされてしまう。
    // 再レンダリングを競合させたくない時はContextを分けていく。
    <LoginUserContext.Provider value={{ loginUser,setLoginUser}}>
      {children}
    </LoginUserContext.Provider>
  )
}