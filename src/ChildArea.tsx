import {memo} from "react";

const style = {
  width: "100%",
  height: "200%",
  backgroundColor: "khaki"
}

export const ChildArea = memo((props:any) => {

  const {open} = props

  // 下記のような書き方をすることで、２０００件の値を用意できる
  const data = [...Array(2000).keys()];
  //console.log(data);

  data.forEach(() => {
    console.log('...');
  })

  //ボタンを押したり文字入力したりすると際レンダリングが起きる

  return(
    <>
{ open === true &&
  <div style={style}>
  <p>子コンポーネント</p>
  </div>
  }
  </>
)


})