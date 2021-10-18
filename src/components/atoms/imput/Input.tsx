import styled from 'styled-components';

export const Input = (props:any) =>{

  // イコールでデフォルトを設定できる
  const {placeholder = ''} = props;

  return (
<SInput type='text' placeholder={placeholder}/>

  )
}
// 上下８px左右１６px
const SInput = styled.input`
  padding: 8px 16px;
  border: soled #ddd 1px;
  outline: none;
  border-radius: 4px;
`;