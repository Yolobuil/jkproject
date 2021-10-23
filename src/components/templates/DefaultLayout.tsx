import { Footer } from "../atoms/Layout/Footer";
import { Header } from "../atoms/Layout/Header";

export const DefaultLayout = (props: any) => {

const {children} = props;

return(
<>
<Header />
{children}
<Footer />
</>


)
}