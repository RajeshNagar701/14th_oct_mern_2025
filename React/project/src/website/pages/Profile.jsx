import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Profile() {

    const [data, setData] = useState({});
    // auto call when component load/birth
    useEffect(() => {
        fetch();
    }, []);

    // // npm i axios
    const fetch = async () => {
        const id=sessionStorage.getItem('uid');
        const res = await axios.get(`http://localhost:3000/customers/${id}`);
        console.log(res.data);
        setData(res.data);
    }

    
    return (
        <div>
            
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>Hi... {data.name}</h1>
                            <p>Id : {data.id}</p>
                            <p>Mobile : {data.mobile}</p>
                            <p>Email : {data.email}</p>
                            <button className='btn btn-warning'>Edit</button>
                        </div>
                        <div className="col-md-4">
                            <img src={data.image} alt="About Hero" width="100%"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Close Banner */}
           
           
        </div>

    )
}

export default Profile