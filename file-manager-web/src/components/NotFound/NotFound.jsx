import React from 'react';

export const NotFound = () => (
    <div className="container body">
        <div className="main_container">
            <div className="col-md-12">
                <div className="col-middle">
                    <div className="text-center text-center">
                        <h1 className="error-number">404</h1>
                        <h2>Sorry but we couldn't find this page</h2>
                        <p>This page you are looking for does not exist <a>Report this?</a>
                        </p>
                        <div className="mid_center">
                            <h3>Search</h3>
                            <form>
                                <div className="col-xs-12 form-group pull-right top_search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);