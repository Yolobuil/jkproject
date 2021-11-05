import { useCallback, useState } from "react"
import { UserFetch } from "../types/api/user";

type Props ={
  id:number;
  users: UserFetch[];
  onOpen: () => void;
}

// 洗濯したユーザを特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserFetch | null >(null);

  const onSelectUser = useCallback((props:Props) =>{
const { id , users ,onOpen} = props;
// findで見つからない場合はundefinedが返される。
const targetUser = users.find((user) => user.id === id);
if(targetUser !== undefined) {
// ( A ?? B) -> Aがnullまたはundeifnedの時にBを実行する。
// （A!）！でundefinedの可能性はありませんとコンパイラに伝えることができる
// setSelectedUser(targetUser ?? null); setSelectedUser(targetUser!);
setSelectedUser(targetUser);
onOpen();
}
  },[])

  return {onSelectUser,selectedUser}
}