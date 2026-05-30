import React from 'react'
import { NavLink } from 'react-router-dom'

function Shop() {
    return (
        <div>
            {/* ***** Main Banner Area Start ***** */}
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Check Our Products</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Main Banner Area End ***** */}
            {/* ***** Products Area Starts ***** */}
            <section className="section" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Our Latest Products</h2>
                                <span>Check out all of our products.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/men-01.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Spring</h4>
                                    <span>$120.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/men-02.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Air Force 1 X</h4>
                                    <span>$90.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/men-03.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Love Nana ‘20</h4>
                                    <span>$150.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/women-01.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>New Green Jacket</h4>
                                    <span>$75.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/women-02.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Dress</h4>
                                    <span>$45.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/women-03.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Spring Collection</h4>
                                    <span>$130.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/kid-01.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>School Collection</h4>
                                    <span>$80.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/kid-02.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Summer Cap</h4>
                                    <span>$12.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li><NavLink to="/single_product"><i className="fa fa-eye" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-star" /></NavLink></li>
                                            <li><NavLink to="/single_product"><i className="fa fa-shopping-cart" /></NavLink></li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/kid-03.jpg" alt />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Kid</h4>
                                    <span>$30.00</span>
                                    <ul className="stars">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="pagination">
                                <ul>
                                    <li>
                                        <NavLink to="#">1</NavLink>
                                    </li>
                                    <li className="active">
                                        <NavLink to="#">2</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">3</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">4</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">&gt;</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Products Area Ends ***** */}
        </div>

    )
}

export default Shop