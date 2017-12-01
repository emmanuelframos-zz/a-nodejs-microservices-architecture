import React from 'react';
import {HeaderContainer} from "../../containers/common/HeaderContainer";
import {SidebarMenuContainer} from "../../containers/common/SidebarMenuContainer";
import { Footer } from "../Footer";

export const FormMetadata = ({onCancel, onDelete, onSave, onChange, state})=>(

    <div>
        <HeaderContainer/>

        <SidebarMenuContainer/>

        <div className="right_col" role="main" style={{height:'70em'}}>
            <div className="">
                <div className="page-title">
                    <div className="title_left">
                        <h3>Form Metadata</h3>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Create/Update Metadata</h2>
                                <ul className="nav navbar-right panel_toolbox">
                                    <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <br />
                                <div data-parsley-validate className="form-horizontal form-label-left">

                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Original Name <span className="required">*</span>
                                        </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="originalName" value={state.originalName} required="required" className="form-control col-md-7 col-xs-12" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Content Type <span className="required">*</span>
                                        </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="contentType" value={state.contentType} required="required" className="form-control col-md-7 col-xs-12" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Size <span className="required">*</span>
                                        </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="size" value={state.size} required="required" className="form-control col-md-7 col-xs-12" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Expiry <span className="required">*</span>
                                        </label>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="expiry" value={state.expiry} required="required" className="form-control col-md-7 col-xs-12" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="ln_solid"></div>
                                    <div className="form-group">
                                        <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                                            <button onClick={onCancel} className="btn btn-default">Cancel</button>
                                            <button className="btn btn-danger">Delete</button>
                                            <button onClick={onSave} className="btn btn-success">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
);