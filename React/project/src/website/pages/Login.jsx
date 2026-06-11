import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
     const [formValue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        comment: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formValue);
    }
    const submitHandel = async (e) => {
        e.preventDefault(); // prevent reload page due to form submit
        const res = await axios.post(`http://localhost:3000/contacts`, formValue);
        setFormvalue({ ...formValue, name: "", email: "", comment: ""});
        alert('Inquiry Inserted Success');
        return false;
    }
    return (
        <div>
           
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandel}>
                        <div className="row">
                           
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" onChange={changeHandel} value={formValue.email} className="form-control mt-1"  name="email" placeholder="Email" />
                            </div>
                             <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Password</label>
                                <input type="text" onChange={changeHandel} value={formValue.password} className="form-control mt-1"  name="password" placeholder="Password" />
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