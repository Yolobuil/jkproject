import { useParams, useLocation}  from 'react-router-dom'

export const UrlParameter = () => {
// const { id } = useParams();
// useLocationに？以降の文字列が入ってくる
const { search } = useLocation();
// 引数でクエリを設定してあげると、メソッドが設定されていることを確認できる（queryパラメータを便利に使うためのメソッドを提供）
const query = new URLSearchParams(search);
  return(
    <>
    <h1>UrlParameterページです</h1>
    {/* <p>パラメータは{id}</p> */}
    {/* getでクエリを展開できる。queryパラメータの名称を設定すると、値が取得できる */}
     <p>queryパラメータは{query.get('name')}</p>
    </>
  )
}