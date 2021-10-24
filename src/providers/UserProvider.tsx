import React,{createContext, useState } from 'react'

// 初期値不要のため、からのオブジェクトを渡す。
// 他の画面でコンテキストの値を使う時に使う→他の画面からも参照できる必要がある。

export const UserContext = createContext({});

export const UserProvider = (props:any) => {
  const {children} = props;
  // contextの値は固定値ではなく、stateを定義していくことになる。（どのコンポーネントからでも更新・参照できるように。）

  const [userInfo,setUserInfo] = useState(null);

return(
// グローバルで参照できる値をvalueで渡す。渡した値が、Providerで囲った配下で参照できる。
// stateとset関数どちらも一緒に渡せる
  <UserContext.Provider value={{userInfo,setUserInfo}}>
    {children}
  </UserContext.Provider>
)

}
