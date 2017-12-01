import React from 'react';

import { SidebarMenuContainer } from "../../containers/common/SidebarMenuContainer";
import { HeaderContainer } from "../../containers/common/HeaderContainer";
import { Footer } from "../Footer/Footer";

import Dropzone from 'react-dropzone';
import {ToastContainer} from "react-toastify";

import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

export const FormUpload = ({onCancel, onClear, onUpload, onSelectDate, onDrop, state}) => (

    <div>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={true}
        />

        <HeaderContainer/>
        <SidebarMenuContainer/>

        <div className="right_col" role="main" style={{height:'70em'}}>
            <div className="">
                <div className="page-title">
                    <div className="title_left">
                        <h3>Artifacts Upload </h3>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Multiple files uploader</h2>
                                <div className="clearfix"></div>
                            </div>
                            <div>
                                <div>
                                    {Dropzone.autoDiscover = false}
                                    <Dropzone className="drop-box" action="/" onDrop={onDrop} multiple={true}>
                                        <p>Drop some files here or click to select files to upload.</p>
                                    </Dropzone>
                                </div>
                                <div>
                                    <div className="x_title">
                                        <h2>Dropped files</h2>
                                        <div className="clearfix"></div>
                                    </div>
                                    <ul>
                                        {state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>

                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Expiry</h2>
                                <div className="clearfix"></div>
                            </div>
                            <div className="form-group">
                                <div className='input-group date datetimepicker-expiry'>
                                    <InfiniteCalendar
                                        width={360}
                                        height={200}
                                        selected={state.expiry}
                                        onSelect={onSelectDate}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="x_panel">
                            <div className="x_content">
                                <button onClick={onCancel} className="btn btn-default">Cancel</button>
                                <button onClick={onClear} className="btn btn-danger">Clear</button>
                                <button onClick={onUpload} type="button" className="btn btn-success">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
)