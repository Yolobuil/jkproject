import React from 'react';

type Props={
  color:string,
  fontSize:string,
}

export const Text:React.FC<Props> = (props) =>{

  const {color , fontSize} = props;

  return <p style={{color:color , fontSize:fontSize}}>テイストです￥</p>
}