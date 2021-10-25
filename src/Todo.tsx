import { TodoType } from './types/todo'
import React from 'react'

// Pickを用いて型の中からあるものを抽出。
export const Todo:React.FC<Omit<TodoType,'id'>> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[完]' : '[未]'
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>
}