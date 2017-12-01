import React from 'react'

import { Header } from '../../components/Header/index'
import {AuthService} from "../../services/AuthService";

export class HeaderContainer extends React.Component {

    onLogout(){
        AuthService.doLogout();
    }

    render(){
        return <Header onLogout={this.onLogout}/>
    }
}