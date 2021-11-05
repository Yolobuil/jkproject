import axios from "axios";
import { useCallback } from "react";
import { useState } from "react";
import { UserFetch } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAlls = () => {
  const [isLoading,setIsLoading] = useState<boolean>(false);
    const [users,setUsers] = useState<Array<UserFetch>>([]);
  const { showMessage } = useMessage();

  const getAllUser = useCallback(() =>{
    setIsLoading(true);
   axios.get<Array<UserFetch>>("https://jsonplaceholder.typicode.com/users").then((res) => {
  setUsers(res.data);
  // finallyとはthenであってもcatchであっても何があっても必ず実行される場所
  }).catch(() => {
      showMessage({title: 'ユーザー取得に失敗しました', status:"error"})

  })
    .finally(() => {
    setIsLoading(false);
  }
  );
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
,[])
  return {isLoading,users,getAllUser}
}