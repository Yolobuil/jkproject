import React,{Children, memo, ReactNode} from 'react'
import { Header } from '../organisms/layout/Header'

// childrenの型ははReactNode。ReactNodeはタグで囲った要素を渡していけるような方の宣言
type Props ={
  children: ReactNode;
}

export const HeaderLayout:React.FC<Props> = memo((props) => {

  const { children } = props;

return (
  <>
  <Header />
  {children}
  </>
)
})