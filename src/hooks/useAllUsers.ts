import axios from 'axios';
import {useState} from 'react';
import { UserFetch } from '../types/api/user';
import { UserProfileType } from '../types/userProfile';

// 全ユーザ一覧を取得するカスタムフック
export const useAllUsers = () => {

  const [ userProfiles,setUserProfiles] = useState<UserProfileType[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [ error,setError] = useState<boolean>(false);

  const getUsers = () => {

  setIsLoading(true);
  setError(false);


   axios.get<Array<UserFetch>>("https://jsonplaceholder.typicode.com/users").then((res) => {
    const data = res.data.map((user) => ({
      id: user.id,
      name: `${user.name}(${user.username})`,
      email: user.email,
      address: `${user.address.city}${user.address.suite}${user.address.street}`
    }));
  setUserProfiles(data);
  // finallyとはthenであってもcatchであっても何があっても必ず実行される場所
  }).catch(() => {
    setError(true);})
    .finally(() => {
    setIsLoading(false);
  }
  );
  }

  // カスタムフックでは配列とオブジェクトで返す２つのパターンがある
  return {getUsers,userProfiles,isLoading,error}
}