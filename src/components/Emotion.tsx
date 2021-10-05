/** @jsxRuntime classic */ // バージョンの違いで下記にエラーが出るため、旧バージョンを使うことを指定
/** @jsx jsx */ // Reactでemotionを使用するときのルール
import { jsx,css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {

  const containerStyle = css`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-arround;
  align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
  color: "#3d84a8",
  })

const SButton = styled.button`
   background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`

return(
  // <div css={containerStyle}> cssをインポートして使う場合は左記のように使う
<div>
  {/* <p css={titleStyle}> */}
  <p >
- EmotionComponents -
  </p>
  <SButton>Fight!</SButton>

</div>
)

}