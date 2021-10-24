import { useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { userState } from '../../../store/userState';

export const UserIconWithName = (props:any) =>{

const{ name , image} = props;
// 値を参照するだけですよというもの（useRecoilValue） 値を更新する場合はuseRecoilState
const userInfo = useRecoilValue(userState);
const isAdmin = userInfo ? userInfo.isAdmin : false;

return(
<SContainer>
  <SImg height={160} width={160}src={image} alt={name}/>
<SName>{name}</SName>
{isAdmin && (<SEdit>編集</SEdit>) }
</SContainer>

)

}


const SEdit = styled.span`
 text-decoration: underline;
 color: #aaa;
 cursor: pointer;
`


const SContainer = styled.div`
 text-align:center;
`

const SImg = styled.img`
 border-radius: 50%;
`

const SName = styled.p`
font-size: 18px;
font-weight: 600;
margin:0;
color: #40514e;
`
