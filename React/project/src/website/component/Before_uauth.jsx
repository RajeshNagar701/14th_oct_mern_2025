import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Before_uauth() {
    const uid=sessionStorage.getItem('uid');
    return uid ? <Navigate to="/" replace /> : <Outlet/>;
}

export default Before_uauth