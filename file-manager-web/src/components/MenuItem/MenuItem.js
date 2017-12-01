import React from 'react'

import { Link } from "react-router-dom";

export const MenuItem = props => (
    <li><Link to={props.route}><i className={props.icon}></i> {props.text} </Link></li>
)