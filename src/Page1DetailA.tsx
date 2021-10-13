import { useLocation,useHistory } from "react-router-dom"

export const Page1DetailA = () => {

const {state} = useLocation();

const history = useHistory();

// 遷移元ページに戻れる（ブラウザのbackボタンと同じ挙動）
const onClickBack = () => history.goBack();

  return(
    <>
    <h1>Page1Detailページです {state}</h1>
    <button onClick={onClickBack}>戻る</button>
    </>
  )
}