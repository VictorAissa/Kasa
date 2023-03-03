import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "../../utils/style/GlobalStyle";
import Home from "../../pages/Home/Home";
import Property from "../../pages/Property/Property";
import About from "../../pages/About/About";
import Error from "../../pages/Error/Error";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Router() {
    return (
        <BrowserRouter>
            {/* <GlobalStyle> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property" element={<Property />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            {/* </GlobalStyle> */}
        </BrowserRouter>
    );
}

export default Router;
