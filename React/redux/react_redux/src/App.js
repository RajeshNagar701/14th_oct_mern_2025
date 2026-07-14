import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add_contact from "./admin/pages/Add_contact";
import Add_user from "./admin/pages/Add_user";
import Dashboard from "./admin/pages/Dashboard";
import Manage_contact from "./admin/pages/Manage_contact";
import Manage_user from "./admin/pages/Manage_user";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add_user" element={<Add_user />}></Route>
          <Route path="/manage_user" element={<Manage_user />}></Route>
          <Route path="/add_contact" element={<Add_contact />}></Route>
          <Route path="/manage_contact" element={<Manage_contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
