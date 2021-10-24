import { atom } from 'recoil'

export const userState = atom({
  // システム全体で参照できるように一意のキーが必要他のrecoilと被らないようにする必要があるため、ファイル名と揃えると良い◎
  key: 'user',
  // 初期値を設定する必要がある。
  default:{ isAdmin: false}
}) ;