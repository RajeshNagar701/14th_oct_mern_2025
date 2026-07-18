import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { insert_user } from '../../app/userSlice';


function Add_user() {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    const changeHandel = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(data);
    }

    function validation() {
        var result = true;
        if (data.name == "" || data.name == null) {
            toast.error('Name field is required');
            result = false;
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('email field is required');
            result = false;
            return false;
        }
        if (data.password == "" || data.password == null) {
            toast.error('password field is required');
            result = false;
            return false;
        }
        if (data.mobile == "" || data.mobile == null) {
            toast.error('mobile field is required');
            result = false;
            return false;
        }
        return result;
    }

    const submithandel = (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert_user(data));
            setData({ ...data, name: "", email: "", password: "", mobile: "" });
            toast.success('User Data Added Success');
            return false;
        }

    }


    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add User</h2>

                        <form action="" onSubmit={submithandel}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Name:</label>
                                <input type="name" value={data.name} onChange={changeHandel} className="form-control" id="name" placeholder="Enter name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" value={data.email} onChange={changeHandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">mobile:</label>
                                <input type="mobile" value={data.mobile} onChange={changeHandel} className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" value={data.password} onChange={changeHandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Add_user

