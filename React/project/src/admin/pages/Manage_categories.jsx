import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Manage_categories() {

    const [data, setData] = useState([]);

    // auto call when component load/birth
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        toast.success('Categories Deleted Success');
        fetch();
        return false;
    }

    //================ edit ====================================
    const [formValue, setFormvalue] = useState({
        id: "",
        name: "",
        image: ""
    });
    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        setFormvalue(res.data);
        return false;
    }

    //================update ==========================

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, [e.target.name]: e.target.value });
        console.log(formValue);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:3000/categories/${formValue.id}`, formValue);
        fetch();
        toast.success('Category updated success');
        return false;
    }

    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">

                <div className="az-content-body pd-lg-l-40 d-flex flex-column">

                    <h2 className="az-content-title">Manage Categories</h2>
                    <div className="az-content-label mg-b-5">Add/Upd/Del Data</div>
                    <div className="table-responsive">
                        <table className="table mg-b-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index, arr) => {
                                        return (
                                            <tr>
                                                <td scope="row">{value.id}</td>
                                                <td>{value.name}</td>
                                                <td><img src={value.image} width="50px" alt="" /></td>
                                                <td>
                                                    <button className='btn btn-primary me-1' onClick={() => editHandel(value.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }



                            </tbody>
                        </table>
                    </div>{/* table-responsive */}
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Categories</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    <form action="" method='post'>
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
                                                <button name="submit" className="btn btn-primary" type="submit" onClick={submitHandel} data-bs-dismiss="modal">Save Categories</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>{/* az-content-body */}
            </div>{/* container */}
        </div>

    )
}

export default Manage_categories