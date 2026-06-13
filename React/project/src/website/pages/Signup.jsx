import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function Signup() {
    const [formValue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        image: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formValue);
    }
    const submitHandel = async (e) => {
        e.preventDefault(); // prevent reload page due to form submit
        const res = await axios.post(`http://localhost:3000/customers`, formValue);
        setFormvalue({ ...formValue, name: "", email: "", password: "", mobile: "", image: "" });
        swal({
            title: "Success!",
            text: "Your Registration Successfull!",
            icon: "success",
            button: "Aww yiss!",
        });

        return false;
    }
    return (
        <div>

            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" role="form" onSubmit={submitHandel}>
                        <div className="row">
                            <div className="form-group col-md-12 mb-3">
                                <input type="text" onChange={changeHandel} value={formValue.name} className="form-control mt-1" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <input type="email" onChange={changeHandel} value={formValue.email} className="form-control mt-1" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <input type="text" onChange={changeHandel} value={formValue.password} className="form-control mt-1" name="password" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <input type="number" onChange={changeHandel} value={formValue.mobile} className="form-control mt-1" name="mobile" placeholder="Mobile" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <input type="url" onChange={changeHandel} value={formValue.image} className="form-control mt-1" name="image" placeholder="Image URL" />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3 float-start">Signup</button>
                                <Link to="/login">If you already Registred then Login Here..</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup