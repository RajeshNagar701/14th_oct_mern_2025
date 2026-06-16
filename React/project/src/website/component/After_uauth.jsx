import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function After_uauth() {
    const uid=sessionStorage.getItem('uid');
    return uid ? <Outlet/> : <Navigate to="/" replace />;
}

export default After_uauth