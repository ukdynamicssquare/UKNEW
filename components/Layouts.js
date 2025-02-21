import Header from "./Header";
import Footer from "./Footer";
import HeaderWork from "./HeaderWork";
import FooterNew from "./FooterNew";

const Layouts = ({children }) => {

return(
<>
<HeaderWork />
    {/* <Header /> */}
    {/* <Footer /> */}
    {children}
    <FooterNew />
</>

);
}
export default Layouts