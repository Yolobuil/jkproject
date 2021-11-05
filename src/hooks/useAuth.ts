import axios from 'axios';
import {useCallback, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { UserFetch } from '../types/api/user';
import { UserProfileType } from '../types/userProfile';
import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';

// 全ユーザ一覧を取得するカスタムフック
// 正常に取得できたらHOME、できなかったらエラー
export const useAuth = () => {

  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [ error,setError] = useState<boolean>(false);

    const { showMessage } = useMessage();
    const {setLoginUser} = useLoginUser();

    const history = useHistory();
  const login = useCallback((id:string) => {
  setIsLoading(true);
  setError(false);



   axios.get<UserFetch>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
if(res.data){
  const isAdmin = res.data.id === 10 ? true : false;
  // ...でオブジェクトを展開後にisAdminを追加しているイメージ。
  // { ...A , B}
 setLoginUser({ ...res.data, isAdmin});
  showMessage({title: "login succeed" , status:"success"})
history.push('/home')
}else{
showMessage({title: "can't fined user" , status:"error"})
   setIsLoading(false);

}

  // finallyとはthenであってもcatchであっても何があっても必ず実行される場所
  }).catch(() => {
      showMessage({title: "can't fined user" , status:"error"})
         setIsLoading(false);
});

  },[history,showMessage,setLoginUser]);

  // カスタムフックでは配列とオブジェクトで返す２つのパターンがある
  return {login,isLoading}
}