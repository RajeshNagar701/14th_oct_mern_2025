import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Login() {

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
        const res = await axios.get(`http://localhost:3000/customers?email=${formValue.email}`);
        if (res.data.length > 0) {
            if (res.data[0].password == formValue.password) {
                sessionStorage.setItem('uid', res.data[0].id);
                sessionStorage.setItem('uname', res.data[0].name);
                swal({
                    title: "Success!",
                    text: "Login Successfull!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                return redirect('/');
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
        <div>

            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandel}>
                        <div className="row">

                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" onChange={changeHandel} value={formValue.email} className="form-control mt-1" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="text" onChange={changeHandel} value={formValue.password} className="form-control mt-1" name="password" placeholder="Password" />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3 float-start">Login</button>
                                <Link to="/signup">If you Not Registred then Signup Here..</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login