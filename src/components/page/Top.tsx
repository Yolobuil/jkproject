import { useContext} from 'react'
import { useHistory } from "react-router-dom"
import { useRecoilState } from 'recoil'
import styled from "styled-components"
import { UserContext } from '../../providers/UserProvider'
import { userState } from '../../store/userState'
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import {useSetRecoilState } from 'recoil';


export const Top = () =>{
  // const { setUserInfo } = useContext(UserContext);

  // useSetRecoilStateは値の更新のみを行う時にしよう
const setUserInfo = useSetRecoilState(userState);

  const history = useHistory();
const onClickAdmin = () => {
  setUserInfo( {isAdmin:true} );
  history.push("/users" );
}
const onClickGeneral = () => {
  setUserInfo( {isAdmin:false} );
  history.push("/users" );
}


  return(
    <SContainer>
      <h2>TOPページです</h2>
    <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
    <br/>
    <br/>
    <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
text-align: center;
`