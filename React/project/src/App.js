import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Shop from "./website/pages/Shop";
import Single_product from "./website/pages/Single_product";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Header/><Home/><Footer/> </>}></Route>
            <Route path="/about" element={<><Header/><About/><Footer/> </>}></Route>
            <Route path="/contact" element={<><Header/><Contact/><Footer/> </>}></Route>
            <Route path="/shop" element={<><Header/><Shop/><Footer/> </>}></Route>
            <Route path="/single_product" element={<><Header/><Single_product/><Footer/> </>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
