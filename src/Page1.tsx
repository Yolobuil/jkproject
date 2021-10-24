// useHistoryというhookをimport
import {Link,useHistory}  from 'react-router-dom';

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  // 変数に展開する
  const history = useHistory();

  // pushメソッドに遷移先のルートを記述することでJSで遷移できる
  const onClickDetailA = () => history.push('/page1/detailA')

  return(
    <>
    <h1>Page1ページです</h1>
    <Link to={{ pathname :"/page1/detailA", state: arr}}>DetailA</Link>
    <br />
       <Link to="/page1/detailB">DetailB</Link>
       <br />
       <button onClick={onClickDetailA}>DetailA</button>
       </>
  )
}