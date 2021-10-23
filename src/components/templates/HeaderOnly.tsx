import { Header } from "../atoms/Layout/Header";

export const HeaderOnly = (props:any) => {
const {children} = props;

return(
<>
<Header />
{children}
</>


)


}