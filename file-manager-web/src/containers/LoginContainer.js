import React from 'react';

import { Login } from '../components/Login';
import { AuthService } from '../services';
import { homeRoute } from "../env";
import { toast } from "react-toastify";

export class LoginContainer extends React.Component {

    hasError = false

    constructor(){
        super();

        this.state= {
            username: 'admin',
            password: '12345678'
        };
    }

    onChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onLogin = () => {

        this.validateLogin();

        if (!this.hasError){
            AuthService.doLogin(this.state)
                .then((response)=> {
                    if (response.status === 200) {
                        this.props.history.push(homeRoute);
                    }
                })
                .catch((error)=>{
                    toast.error('Error on login.')
                });
        }
    };

    validateLogin = ()=> {
        if (!this.state.username){
            toast.error('User name cannot be empty.');
            this.hasError = true
            return;
        }

        if (this.state.username.length < 5){
            toast.error('User name must have at least 5 characters.');
            this.hasError = true
            return;
        }

        if (!this.state.password){
            toast.error('Password cannot be empty.');
            this.hasError = true;
            return;
        }

        if (this.state.password.length < 8){
            toast.error('Password must have at least 8 characters.');
            this.hasError = true
            return;
        }

        this.hasError = false;
    }

    render(){
        return <Login onLogin={this.onLogin} onChange={this.onChanged} />;
    }
};