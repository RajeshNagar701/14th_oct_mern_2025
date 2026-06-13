import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function AHeader() {

  const redirect = useNavigate();

  const adminlogout = () => {
    sessionStorage.removeItem('aid');
    sessionStorage.removeItem('aname');
    swal({
      title: "Success!",
      text: "Logout Successfull!",
      icon: "success",
      button: "Aww yiss!",
    });
    return redirect('/admin-login');

  }
  return (
    <div>
      <div className="az-header">
        <div className="container">
          <div className="az-header-left">
            <a href="index.html" className="az-logo"><span /> azia</a>
            <a href id="azMenuShow" className="az-header-menu-icon d-lg-none"><span /></a>
          </div>{/* az-header-left */}
          <div className="az-header-menu">
            <div className="az-header-menu-header">
              <a href="index.html" className="az-logo"><span /> azia</a>
              <a href className="close">×</a>
            </div>
            <ul className="nav">
              <li className="nav-item active show">
                <NavLink to="/dashboard" className="nav-link"><i className="typcn typcn-chart-area-outline" /> Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <a href className="nav-link with-sub"><i className="typcn typcn-document" /> Categories</a>
                <nav className="az-menu-sub">
                  <NavLink to="/add_categories" className="nav-link">Add Categories</NavLink>
                  <NavLink to="/manage_categories" className="nav-link">Manage Categories</NavLink>
                </nav>
              </li>
              <li className="nav-item">
                <a href className="nav-link with-sub"><i className="typcn typcn-document" /> Product</a>
                <nav className="az-menu-sub">
                  <NavLink to="/add_products" className="nav-link">Add Product</NavLink>
                  <NavLink to="/manage_products" className="nav-link">Manage Product</NavLink>
                </nav>
              </li>
              <li className="nav-item show">
                <NavLink to="/manage_customers" className="nav-link"><i className="typcn typcn-document" /> Customer</NavLink>
              </li>
              <li className="nav-item show">
                <NavLink to="/manage_contacts" className="nav-link"><i className="typcn typcn-document" /> Contacts</NavLink>
              </li>
              <li className="nav-item">
                <a href className="nav-link with-sub"><i className="typcn typcn-document" /> Selling</a>
                <nav className="az-menu-sub">
                  <NavLink to="/add_products" className="nav-link">Cart</NavLink>
                  <NavLink to="/manage_products" className="nav-link">Order</NavLink>
                  <NavLink to="/manage_products" className="nav-link">Pyment</NavLink>
                </nav>
              </li>
            </ul>
          </div>{/* az-header-menu */}
          <div className="az-header-right">
            <div className="dropdown az-profile-menu">
              <a href className="az-img-user"><img src="./admin/img/faces/face1.jpg" alt /></a>
              <div className="dropdown-menu">
                <div className="az-dropdown-header d-sm-none">
                  <a href className="az-header-arrow"><i className="icon ion-md-arrow-back" /></a>
                </div>
                <div className="az-header-profile">
                  <div className="az-img-user">
                    <img src="../img/faces/face1.jpg" alt />
                  </div>{/* az-img-user */}
                  <h6>Aziana Pechon</h6>
                  <span>Premium Member</span>
                </div>{/* az-header-profile */}
                <a href className="dropdown-item"><i className="typcn typcn-user-outline" /> My Profile</a>
                <a href className="dropdown-item"><i className="typcn typcn-edit" /> Edit Profile</a>
                <a href className="dropdown-item"><i className="typcn typcn-time" /> Activity Logs</a>
                <a href className="dropdown-item"><i className="typcn typcn-cog-outline" /> Account Settings</a>
                <a href="#" onClick={adminlogout} className="dropdown-item"><i className="typcn typcn-power-outline" /> Sign Out</a>
              </div>{/* dropdown-menu */}
            </div>
          </div>{/* az-header-right */}
        </div>{/* container */}
      </div>{/* az-header */}
    </div>

  )
}

export default AHeader