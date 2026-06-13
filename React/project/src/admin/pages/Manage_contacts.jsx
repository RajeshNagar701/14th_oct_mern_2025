import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Manage_contacts() {

    const [data, setData] = useState([]);
    // auto call when component load/birth
    useEffect(() => {
        fetch();
    }, []);

    // // npm i axios
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contacts`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/contacts/${id}`);
        toast.success('Contacts Deleted Success');
        fetch();
        return false;
    }

    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">

                <div className="az-content-body pd-lg-l-40 d-flex flex-column">

                    <h2 className="az-content-title">Manage Contact</h2>
                    <div className="az-content-label mg-b-5">Add/Upd/Del Data</div>
                    <div className="table-responsive">
                        <table className="table mg-b-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Comment</th>
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
                                                <td>{value.email}</td>
                                                <td>{value.comment}</td>
                                                <td>
                                                    <button className='btn btn-primary me-1'>Edit</button>
                                                    <button className='btn btn-danger' onClick={()=> deleteHandel(value.id) }>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>{/* table-responsive */}


                </div>{/* az-content-body */}
            </div>{/* container */}
        </div>

    )
}

export default Manage_contacts