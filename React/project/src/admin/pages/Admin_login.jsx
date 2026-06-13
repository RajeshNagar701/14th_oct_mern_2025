import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Admin_login() {

    const redirect = useNavigate();
    const [formValue, setFormvalue] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, [e.target.name]: e.target.value });
        console.log(formValue);
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://localhost:3000/admin?email=${formValue.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == formValue.password) {
                sessionStorage.setItem('aid', res.data[0].id);
                sessionStorage.setItem('aname', res.data[0].name);
                swal({
                    title: "Success!",
                    text: "Login Successfull!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                return redirect('/dashboard');
            }
            else {
                swal({
                    title: "Failed!",
                    text: "Login Failed due to wrong creadentical!",
                    icon: "error"
                });
                setFormvalue({ ...formValue, email: "", password: "" });
                return false
            }
        }
        else {
            swal({
                title: "Failed!",
                text: "Login Failed due to Email does not exist!",
                icon: "error"
            });
            setFormvalue({ ...formValue, email: "", password: "" });
            return false
        }

    }
    return (
        <div className='mt-5'>
            <div className="az-signin-wrapper">
                <div className="az-card-signin">
                    <h1 className="az-logo">az<span>i</span>a</h1>
                    <div className="az-signin-header">
                        <h2>Welcome back!</h2>
                        <h4>Please sign in to continue</h4>
                        <form action="" method='post' onSubmit={submitHandel}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" onChange={changeHandel} className="form-control" placeholder="Enter your email" />
                            </div>{/* form-group */}
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"  name="password" onChange={changeHandel} className="form-control" placeholder="Enter your password"  />
                            </div>{/* form-group */}
                            <button type='submit' className="btn btn-az-primary btn-block">Sign In</button>
                        </form>
                    </div>{/* az-signin-header */}
                    <div className="az-signin-footer">
                        <p><a href>Forgot password?</a></p>
                        <p>Don't have an account? <a href="page-signup.html">Create an Account</a></p>
                    </div>{/* az-signin-footer */}
                </div>{/* az-card-signin */}
            </div>{/* az-signin-wrapper */}
        </div>


    )
}

export default Admin_login