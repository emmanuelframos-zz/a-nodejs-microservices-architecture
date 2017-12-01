import React from 'react';
import {applicationName} from "../../env";
import {ToastContainer} from "react-toastify";

export const Login = ({onLogin, onChange}) => (
    <div className="login">

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={true}
        />

        <div className="login_wrapper">
            <div className="animate form login_form">
                <section className="login_content">
                    <form>
                        <h1>Sign In</h1>
                        <div>
                            <input type="text" name="username" value="admin" className="form-control" placeholder="Username" required="" onChange={onChange} />
                        </div>
                        <div>
                            <input type="password" name="password" value="12345678" className="form-control" placeholder="Password" required="" onChange={onChange} />
                        </div>
                        <div>
                            <a className="btn btn-default submit" onClick={onLogin}>Log in</a>
                            <a className="reset_pass">Lost your password?</a>
                        </div>

                        <div className="clearfix"></div>

                        <div className="separator">

                            <div className="clearfix"></div>
                            <br />

                            <div>
                                <h1><i className="fa fa-paw"></i> {applicationName}</h1>
                                <p>©2017 All Rights Reserved.</p>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
);