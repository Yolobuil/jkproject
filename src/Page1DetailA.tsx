import { useLocation } from "react-router-dom"

export const Page1DetailA = () => {

const {state} = useLocation();

  return(
    <h1>Page1Detailページです {state}</h1>
  )
}