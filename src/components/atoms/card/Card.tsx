import styled from 'styled-components';

export const Card = (props:any) => {
  const {children} = props;
  return( <SCard>{children}</SCard>


  )
}

//box-shadow: 色　x軸　y軸　ぼかしの距離　どれだけ広げるか

const SCard = styled.div`
  background-color : #fff;
  box-shadow: #ddd 1px 0px 2px 2px;
  border-radius: 8px;
  padding:16px;
`