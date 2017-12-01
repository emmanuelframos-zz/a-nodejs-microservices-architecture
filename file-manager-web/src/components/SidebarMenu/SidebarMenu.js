import React from 'react'

import { MenuItemContainer } from "../../containers/common/MenuItemContainer";
import { homeRoute, metadataRoute, uploadRoute, applicationName } from "../../env";

export const SidebarMenu = ({onLogout}) => (
    <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
            <div className="navbar nav_title" style={{border: '0'}}>
                <a className="site_title"><i className="fa fa-paw"></i> <span>{applicationName}</span></a>
            </div>

            <div className="clearfix"></div>

            <br />

            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <MenuItemContainer icon={'fa fa-home'} text={'Home'} route={homeRoute} />
                        <MenuItemContainer icon={'fa fa-cloud-upload'} text={'Upload'} route={uploadRoute} />
                        <MenuItemContainer icon={'fa fa-file-text-o'} text={'Metadata'} route={metadataRoute} />
                    </ul>
                </div>
            </div>
        </div>

        <div className="sidebar-footer hidden-small">
            <a onClick={onLogout} data-toggle="tooltip" data-placement="top" title="Logout">
                <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
        </div>
    </div>
);