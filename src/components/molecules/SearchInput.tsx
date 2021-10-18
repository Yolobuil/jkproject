import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/imput/Input'
import styled from 'styled-components';

export const SearchInput = () =>{

  return(
 <SContainer>
<Input placeholder='検索条件を入力'/>
 <SButtonWrapper>
<PrimaryButton children='検索'></PrimaryButton>
  </SButtonWrapper>
  </SContainer>
  )
}

const SButtonWrapper = styled.div`
padding-left: 8px;
`;

// 横並びにする(display)alignItems(上下の並びを真ん中にする)
const SContainer = styled.div`
display:flex;
align-items: center;
`;