import React from "react";

import { MenuItem } from "../../components/MenuItem/MenuItem";

export class MenuItemContainer extends React.Component {

    render(){
        return <MenuItem icon={this.props.icon} text={this.props.text} route={this.props.route} />
    }
}