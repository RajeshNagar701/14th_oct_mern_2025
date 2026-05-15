import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Basic_crud() {

    const [formvalue, setFormvalue] = useState({
        name:"",
        email:"",
        password:"",
        mobile:""
    });

    const changeHandel = (e) => {
        // set all form value in formvalue object
        setFormvalue({ ...formvalue,id:new Date().getTime().toString() ,[e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const [data, setData] = useState([]);
    const onsubmitHandel = (e) => {
        e.preventDefault(); // page not refress/load on submit
        setData([...data, formvalue]); // push formvalue object in data array 
        setFormvalue({ ...formvalue,name:"",email:"",password:"",mobile:""});  // form black after submit
    }


    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>Basic Crud</h1>
            </div>

            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Add User</h2>
                        <form action="" onSubmit={onsubmitHandel}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" onChange={changeHandel} value={formvalue.name} className="form-control" id="email" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" onChange={changeHandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" onChange={changeHandel} value={formvalue.password} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Mobile:</label>
                                <input type="number" onChange={changeHandel} value={formvalue.mobile} className="form-control" id="pwd" placeholder="Enter Mobile" name="mobile" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <br/>
                    <hr />
                    <br/>
                    <div className="col-sm-12">
                        <h2>Manage User</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                // our data array in map loop for display one by one data
                                data&&data.map((value,index,arr)=>{

                                    return(
                                          <tr>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.password}</td>
                                            <td>{value.mobile}</td>
                                         </tr>  
                                    )
                                })
                               }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default Basic_crud