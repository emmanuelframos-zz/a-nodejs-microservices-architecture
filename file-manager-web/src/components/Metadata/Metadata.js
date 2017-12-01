import React from 'react'

import { HeaderContainer } from "../../containers/common/HeaderContainer";
import { SidebarMenuContainer } from "../../containers/common/SidebarMenuContainer";
import { Footer } from "../Footer/Footer";

export const Metadata = ({onCancel, onUpdate, onCreate, onFilter, onClearFilter, rows, state}) => (

    <div>

        <HeaderContainer/>

        <SidebarMenuContainer/>

        <div className="right_col" role="main" style={{height:'70em'}}>
            <div className="">
                <div className="page-title">
                    <div className="title_left">
                        <h3>Artifacts Metadata</h3>
                    </div>
                    <div className="title_right">
                        <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                            <div className="input-group">
                                <input value={state.filterValue} onChange={onFilter} type="text" className="form-control" placeholder="Search for file name..."/>
                                <span className="input-group-btn">
                                  <button onClick={onClearFilter} className="btn btn-default" type="button">Clear</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Metadata List</h2>
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">

                                <table className="table table-striped projects">
                                    <thead>
                                        <tr>
                                            <th style={{width: '1%'}}>#</th>
                                            <th style={{width: '40%'}}>Original Name</th>
                                            <th style={{width: '20%'}}>Content Type</th>
                                            <th style={{width: '10%'}}>Size</th>
                                            <th style={{width: '19%'}}>Expiry</th>
                                            <th style={{width: '10%'}}>Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="x_panel">
                    <div className="x_content">
                        <button onClick={onCancel} className="btn btn-default">Cancel</button>
                        <button onClick={onCreate} type="button" className="btn btn-success">Create</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </div>
)