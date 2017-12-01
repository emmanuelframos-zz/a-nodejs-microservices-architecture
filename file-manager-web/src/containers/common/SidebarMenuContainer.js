import React from 'react'

import { SidebarMenu } from "../../components/SidebarMenu/index";
import {AuthService} from "../../services/AuthService";

export class SidebarMenuContainer extends React.Component {

    onLogout(){
        AuthService.doLogout();
    }

    render(){
        return <SidebarMenu onLogout={this.onLogout}/>;
    }
}