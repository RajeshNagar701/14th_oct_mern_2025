import React from 'react'

function Admin_login() {
    return (
        <div className='mt-5'>
            <div className="az-signin-wrapper">
                <div className="az-card-signin">
                    <h1 className="az-logo">az<span>i</span>a</h1>
                    <div className="az-signin-header">
                        <h2>Welcome back!</h2>
                        <h4>Please sign in to continue</h4>
                        <form action="index.html">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter your email" defaultValue="demo@bootstrapdash.com" />
                            </div>{/* form-group */}
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter your password" defaultValue="thisisademo" />
                            </div>{/* form-group */}
                            <button className="btn btn-az-primary btn-block">Sign In</button>
                        </form>
                    </div>{/* az-signin-header */}
                    <div className="az-signin-footer">
                        <p><a href>Forgot password?</a></p>
                        <p>Don't have an account? <a href="page-signup.html">Create an Account</a></p>
                    </div>{/* az-signin-footer */}
                </div>{/* az-card-signin */}
            </div>{/* az-signin-wrapper */}
        </div>


    )
}

export default Admin_login