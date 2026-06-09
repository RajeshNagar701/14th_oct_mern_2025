import axios from 'axios';
import React, { useState } from 'react'

function Add_categories() {

    const [formValue,setFormvalue]=useState({
        id:"",
        name:"",
        image:"",
    });

    const changeHandel=(e)=>{
        setFormvalue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formValue);
    }
    const submitHandel=async(e)=>{
        e.preventDefault(); // prevent reload page due to form submit
        const res=await axios.post(`http://localhost:3000/categories`,formValue);
        setFormvalue({...formValue,name:"",image:""});
        alert('Data Inserted Success');
        return false;
    }

    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">

                <div className="az-content-body pd-lg-l-40 d-flex flex-column">

                    <h2 className="az-content-title">Add Categories</h2>
                    <div className="az-content-label mg-b-5 mb-5">Add Data</div>
                    <form action="" method='post' onSubmit={submitHandel}>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <input onChange={changeHandel} value={formValue.name} name="name" className="form-control" placeholder="Enter Categories Name" type="text" />
                            </div>
                        </div>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <input name="image" onChange={changeHandel} value={formValue.image} className="form-control" placeholder="Enter Image url" type="url" />
                            </div>
                        </div>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <button name="submit" className="btn btn-primary" type="submit">Add Categories</button>
                            </div>
                        </div>
                    </form>

                </div>{/* az-content-body */}
            </div>{/* container */}
        </div>

    )
}

export default Add_categories