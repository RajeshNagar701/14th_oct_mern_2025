import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';


function Shop() {

  const redirect = useNavigate(); // we can redirect any routes
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const [formValue, setFormvalue] = useState({
    id: "",
    user_id:"",
    product_id: "",
    quantity: ""
  });
  // auto call when component load/birth
  useEffect(() => {
    fetch_cate();
    fetch_product();
  }, []);

  const fetch_cate = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  }

  const fetch_product = async () => {
    const res = await axios.get(`http://localhost:3000/products`);
    console.log(res.data);
    setData1(res.data);
  }

  const fetch_bycate = async (category_id) => {
    const res = await axios.get(`http://localhost:3000/products?category_id=${category_id}`);
    console.log(res.data);
    setData1(res.data);
  }

  const changeHandel = (e) => {
    setFormvalue({ ...formValue,id:new Date().getTime().toString(),[e.target.name]: e.target.value });
    console.log(formValue);
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/cart`, formValue);
    setFormvalue({ ...formValue, product_id: "", user_id: "", quantity: "" });
    swal({
      title: "Success!",
      text: "Product added Success!",
      icon: "success",
      button: "Aww yiss!",
    });
    return false;
  }


  return (
    <div>
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="h2 pb-4">Categories</h1>
              <ul className="list-unstyled templatemo-accordion">
                <li className="pb-3">
                  <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                    Gender
                    <i className="fa fa-fw fa-chevron-circle-down mt-1" />
                  </a>
                  <ul className="collapse show list-unstyled pl-3">
                    <li><a className="text-decoration-none" href="#" onClick={() => fetch_product()}>All</a></li>

                    {
                      data.map((value) => {
                        return (
                          <li><a className="text-decoration-none" href="#" onClick={() => fetch_bycate(value.id)}>{value.name}</a></li>
                        )
                      })
                    }
                  </ul>
                </li>

              </ul>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-inline shop-top-menu pb-3 pt-1">
                    <li className="list-inline-item">
                      <a className="h3 text-dark text-decoration-none mr-3" onClick={() => fetch_product()} href="#">All</a>
                    </li>
                    {
                      data.map((value) => {
                        return (
                          <li className="list-inline-item">
                            <a className="h3 text-dark text-decoration-none mr-3" onClick={() => fetch_bycate(value.id)} href="#">{value.name}</a>
                          </li>
                        )
                      })
                    }

                  </ul>
                </div>
                <div className="col-md-6 pb-4">
                  <div className="d-flex">
                    <select className="form-control">
                      <option>Featured</option>
                      <option>A to Z</option>
                      <option>Item</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">


                {
                  data1.map((value) => {
                    return (
                      <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                          <div className="card rounded-0">
                            <img className="card-img rounded-0 img-fluid" src={value.image} />
                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                              <ul className="list-unstyled">
                                <li><a className="btn btn-success text-white" href="#" onClick={() => redirect('/shop-single/' + value.id)}><i className="far fa-heart" /></a></li>
                                <li><a className="btn btn-success text-white mt-2" href="#"><i className="far fa-eye" /></a></li>

                              </ul>
                            </div>
                          </div>
                          <div className="card-body">
                            <Link to="/shop-single" className="h3 text-decoration-none">Oupidatat non</Link>
                            <p className="text-center mb-0">$250.00</p>
                            <form action="" method='post' onSubmit={submitHandel}>
                              <input type="text"   name="user_id" value={sessionStorage.getItem('uid')} />
                              <input type="text"   name="product_id" value={value.id} />
                              <input type="number" onChange={changeHandel} name="quantity" size="1" required/>

                              <button type='submit' className="btn btn-success text-white float-end"><i className="fas fa-cart-plus" /></button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }



              </div>
              <div div="row">
                <ul className="pagination pagination-lg justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Start Brands */}
        <section className="bg-light py-5">
          <div className="container my-4">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Our Brands</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="col-lg-9 m-auto tempaltemo-carousel">
                <div className="row d-flex flex-row">
                  {/*Controls*/}
                  <div className="col-1 align-self-center">
                    <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                      <i className="text-light fas fa-chevron-left" />
                    </a>
                  </div>
                  {/*End Controls*/}
                  {/*Carousel Wrapper*/}
                  <div className="col">
                    <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                      {/*Slides*/}
                      <div className="carousel-inner product-links-wap" role="listbox">
                        {/*First slide*/}
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_01.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_02.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_03.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_04.png" alt="Brand Logo" /></a>
                            </div>
                          </div>
                        </div>
                        {/*End First slide*/}
                        {/*Second slide*/}
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_01.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_02.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_03.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_04.png" alt="Brand Logo" /></a>
                            </div>
                          </div>
                        </div>
                        {/*End Second slide*/}
                        {/*Third slide*/}
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_01.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_02.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_03.png" alt="Brand Logo" /></a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#"><img className="img-fluid brand-img" src="website/assets/img/brand_04.png" alt="Brand Logo" /></a>
                            </div>
                          </div>
                        </div>
                        {/*End Third slide*/}
                      </div>
                      {/*End Slides*/}
                    </div>
                  </div>
                  {/*End Carousel Wrapper*/}
                  {/*Controls*/}
                  <div className="col-1 align-self-center">
                    <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                      <i className="text-light fas fa-chevron-right" />
                    </a>
                  </div>
                  {/*End Controls*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Brands*/}
      </div>
      {/* Start Footer */}
      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw" />
                  123 Consectetur at ligula 10660
                </li>
                <li>
                  <i className="fa fa-phone fa-fw" />
                  <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw" />
                  <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li><a className="text-decoration-none" href="#">Luxury</a></li>
                <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
                <li><a className="text-decoration-none" href="#">Popular Dress</a></li>
                <li><a className="text-decoration-none" href="#">Gym Accessories</a></li>
                <li><a className="text-decoration-none" href="#">Sport Shoes</a></li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li><a className="text-decoration-none" href="#">Home</a></li>
                <li><a className="text-decoration-none" href="#">About Us</a></li>
                <li><a className="text-decoration-none" href="#">Shop Locations</a></li>
                <li><a className="text-decoration-none" href="#">FAQs</a></li>
                <li><a className="text-decoration-none" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light" />
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline text-left footer-icons">
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
              <div className="input-group mb-2">
                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                <div className="input-group-text btn-success text-light">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright © 2021 Company Name
                  | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {'}'}
    </div>
  )
}


export default Shop