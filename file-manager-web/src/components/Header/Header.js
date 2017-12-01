import React from 'react'

export const Header = ({onLogout}) => (
    <div className="top_nav">
        <div className="nav_menu">
            <nav>
                <ul className="nav navbar-nav navbar-right pointer">
                    <li className="">
                        <a className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            User &nbsp;
                            <span className=" fa fa-angle-down"></span>
                        </a>
                        <ul className="dropdown-menu dropdown-usermenu pull-right">
                            <li><a> Profile</a></li>
                            <li><a onClick={onLogout}><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
);