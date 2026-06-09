import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Add_products() {

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

    const [formValue, setFormvalue] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category_id: "",
        image: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formValue);
    }
    const submitHandel = async (e) => {
        e.preventDefault(); // prevent reload page due to form submit
        const res = await axios.post(`http://localhost:3000/products`, formValue);
        setFormvalue({ ...formValue, title: "", price: "", description: "", category_id: "", image: "" });
        alert('Data Inserted Success');
        return false;
    }
    return (
        <div className="az-content pd-y-20 pd-lg-y-30 pd-xl-y-40">
            <div className="container">

                <div className="az-content-body pd-lg-l-40 d-flex flex-column">

                    <h2 className="az-content-title">Add Product</h2>
                    <div className="az-content-label mg-b-5 mb-5">Add Data</div>
                    <form action="" method='post' onSubmit={submitHandel}>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <select onChange={changeHandel} value={formValue.category_id} name="category_id" className="form-control">
                                    <option>Select Any one product Categories</option>
                                    {
                                        data.map((value)=>{
                                            return(
                                                <option value={value.id}>{value.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <input onChange={changeHandel} value={formValue.title} name="title" className="form-control" placeholder="Enter Product Title" type="text" />
                            </div>
                        </div>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <input name="price" onChange={changeHandel} value={formValue.price} className="form-control" placeholder="Enter Product price" type="text" />
                            </div>
                        </div>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <textarea name="description" onChange={changeHandel} value={formValue.description} className="form-control" placeholder="Enter Product price"></textarea>
                            </div>
                        </div>
                        <div className="row row-sm mb-2">
                            <div className="col-lg">
                                <input name="image" onChange={changeHandel} value={formValue.image} className="form-control" placeholder="Enter Product Image Url" type="url" />
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

export default Add_products