import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Shopsingle() {

    const {id}=useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(res.data);
        setData(res.data);
    }

    return (
        <div>
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={data.image} alt="Card image cap" id="product-detail" />
                            </div>
                            
                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{data.title}</h1>
                                    <p className="h3 py-2">${data.price}.00</p>
                                    
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Brand:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong>Easy Wear</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Description:</h6>
                                    <p>
                                        {data.description}
                                    </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Avaliable Color :</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong>White / Black</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Specification:</h6>
                                    <ul className="list-unstyled pb-3">
                                        <li>{data.description}</li>
                                    </ul>
                                    <form action method="GET">
                                        <input type="hidden" name="product-title" defaultValue="Activewear" />
                                        <div className="row">
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item">Size :
                                                        <input type="hidden" name="product-size" id="product-size" defaultValue="S" />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                                                </ul>
                                            </div>
                                            <div className="col-auto">
                                                <ul className="list-inline pb-3">
                                                    <li className="list-inline-item text-right">
                                                        Quantity
                                                        <input type="hidden" name="product-quanity" id="product-quanity" defaultValue={1} />
                                                    </li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                                    <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                                                    <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col d-grid">
                                                <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                            </div>
                                            <div className="col d-grid">
                                                <button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </div>

    )
}

export default Shopsingle