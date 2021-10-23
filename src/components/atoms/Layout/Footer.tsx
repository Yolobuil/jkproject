import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer = () => {
return (
  <SFooter>
 &copy; 2021 yolo.
  </SFooter>
)

}

//padding 上下８px　左右０
// position:fixed -> 位置の固定
const SFooter = styled.footer`
background-color: #11999e;
color : #fff;
text-align: center;
padding: 8px 0;
buttom: 0;
position : fixed;
width 100%;
`
