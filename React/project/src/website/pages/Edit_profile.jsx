import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function Edit_profile() {

    const redirect=useNavigate();

    useEffect(() => {
        editHandel();
    }, []);

    const {id}=useParams();

    const editHandel = async () => {
        const res = await axios.get(`http://localhost:3000/customers/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const [formValue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        image: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue,[e.target.name]: e.target.value });
        console.log(formValue);
    }
    const submitHandel = async (e) => {
        e.preventDefault(); 
        const res = await axios.put(`http://localhost:3000/customers/${formValue.id}`, formValue);
        redirect('/profile');
        swal({
            title: "Success!",
            text: "Your Profile Updated Successfull!",
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
                                <input type="number" onChange={changeHandel} value={formValue.mobile} className="form-control mt-1" name="mobile" placeholder="Mobile" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <input type="url" onChange={changeHandel} value={formValue.image} className="form-control mt-1" name="image" placeholder="Image URL" />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3 float-start">Save</button>
                                <Link to="/profile">Back To Profile</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Edit_profile