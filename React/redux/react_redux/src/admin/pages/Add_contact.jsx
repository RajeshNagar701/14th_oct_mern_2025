import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { toast } from 'react-toastify';



function Add_contact() {

     const [data, setData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const changeHandel = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
        if (data.comment == "" || data.comment == null) {
            toast.error('comment field is required');
            result = false;
            return false;
        }
        return result;
    }


    const submithandel=(e)=>{
        e.preventDefault();
        if(validation())
        {
          
        }

    }


    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Contact</h2>

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
                                <label htmlFor="email">Comment:</label>
                                <textarea value={data.comment} onChange={changeHandel} className="form-control"  name="comment"></textarea>
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

export default Add_contact

