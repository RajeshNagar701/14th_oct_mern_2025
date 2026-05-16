import React, { useState } from 'react'

function Basic_crud() {

    const [formValue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:""
    });

    const changeHandel=(e)=>{
        setFormvalue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formValue);
    }

    const [data, setData] = useState([]);
    const submitHandel=(e)=>{
        e.preventDefault(); // prevent reload page due to form submit
        setData([...data,formValue]);
        setFormvalue({...formValue,name:"",email:"",password:"",mobile:""});
        alert('Data Inserted Success');
        return false;
    }

    const deleteHandel=(id)=>{

        const filterdata=data.filter((value,index,arr)=>{
            return value.id!=id;
        })
        setData(filterdata);
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
                        <form action="" method="post" onSubmit={submitHandel}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" value={formValue.name} onChange={changeHandel} className="form-control" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" value={formValue.email} onChange={changeHandel} className="form-control" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" value={formValue.password} onChange={changeHandel} className="form-control" placeholder="Enter password" name="password"  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd"  className="form-label">Mobile:</label>
                                <input type="number" value={formValue.mobile} onChange={changeHandel} className="form-control" placeholder="Enter Mobile" name="mobile" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <br />
                    <hr />
                    <br />
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data&&data.map((value,index,arr)=>{
                                    return(
                                         <tr>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.password}</td>
                                            <td>{value.mobile}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={()=>{deleteHandel(value.id)}}>Delete</button>
                                            </td>
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