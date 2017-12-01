import React from 'react';

import { FormUpload } from "../components/FormUpload/FormUpload";

import { UploadService } from "../services/UploadService";
import { AuthService } from "../services/AuthService";
import { homeRoute } from "../env";
import { toast } from "react-toastify";

export class FormUploadContainer extends React.Component {

    constructor(){
        super();

        this.state= {
            files: [],
            expiry: new Date().getTime()
        };
    }

    componentWillMount(){
        AuthService.checkAuthentication();
    }

    onDrop = (files)=> {
        this.setState({
            files
        });
    }

    onSelectDate = (date)=>{
        this.setState({expiry: date.getTime()});
    }

    onCancel = ()=>{
        this.props.history.push(homeRoute);
    }

    onClear = ()=>{
        this.setState({
            files: []
        });
    }

    onUpload = ()=> {

        if (this.isFilesEmpty()){
            this.showWarn();
            return;
        }

        UploadService.uploadBinary(this.state)
            .then(()=>{
                this.showConfirmation();
                this.onClear();
            })
            .catch(()=>{
                this.showError();
            });
    };

    isFilesEmpty = ()=> {
        return !this.state.files || this.state.files.length === 0;
    }

    showConfirmation = ()=> {
        toast.success('File(s) uploaded.');
    }

    showError = ()=> {
        toast.error('Error on upload.');
    }

    showWarn = ()=> {
        toast.warn('No file(s) to upload.');
    }

    render(){
        return <FormUpload onCancel={this.onCancel}
                           onClear={this.onClear}
                           onUpload={this.onUpload}
                           onSelectDate={this.onSelectDate}
                           onDrop={this.onDrop}
                           state={this.state}
        />
    }
}