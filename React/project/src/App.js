import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Shop from "./website/pages/Shop";
import Contect from "./website/pages/Contect";
import ShopSingle from "./website/pages/Shop-single";
import AHeader from "./admin/component/AHeader";
import AFooter from "./admin/component/AFooter";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_products from "./admin/pages/Add_products";
import Manage_products from "./admin/pages/Manage_products";
import Manage_contacts from "./admin/pages/Manage_contacts";
import Manage_customers from "./admin/pages/Manage_customers";
import Admin_login from "./admin/pages/Admin_login";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About/><Footer /></>}></Route>
          <Route path="/shop" element={<><Header /><Shop/><Footer /></>}></Route>
          <Route path="/shop-single/:id" element={<><Header /><ShopSingle/><Footer /></>}></Route>
          <Route path="/contact" element={<><Header /><Contect/><Footer /></>}></Route>
          <Route path="/login" element={<><Header /><Login/><Footer /></>}></Route>
          <Route path="/signup" element={<><Header /><Signup/><Footer /></>}></Route>

          <Route path="/dashboard" element={<><AHeader /><Dashboard/><AFooter /></>}></Route>
          <Route path="/add_categories" element={<><AHeader /><Add_categories/><AFooter /></>}></Route>
          <Route path="/manage_categories" element={<><AHeader /><Manage_categories/><AFooter /></>}></Route>
           <Route path="/add_products" element={<><AHeader /><Add_products/><AFooter /></>}></Route>
          <Route path="/manage_products" element={<><AHeader /><Manage_products/><AFooter /></>}></Route>
          <Route path="/manage_customers" element={<><AHeader /><Manage_customers/><AFooter /></>}></Route>
          <Route path="/manage_contacts" element={<><AHeader /><Manage_contacts/><AFooter /></>}></Route>
          <Route path="/admin-login" element={<><Admin_login/></>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
