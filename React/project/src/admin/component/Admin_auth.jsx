import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Admin_auth() {
    const aid=sessionStorage.getItem('aid');
    return aid ? <Outlet/> : <Navigate to="/admin-login" replace />;
}

export default Admin_auth