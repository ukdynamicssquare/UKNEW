import Header from "./Header";
import Footer from "./Footer";
import HeaderWork from "./HeaderWork";

const Layouts = ({children }) => {

return(
<>
<HeaderWork />
    {/* <Header /> */}
        {children}
    <Footer />
</>

);
}
export default Layouts