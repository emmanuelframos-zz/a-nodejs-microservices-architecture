import React from 'react'

import {applicationName} from "../../env";

export const Footer = () => (
    <footer>
        <div className="pull-right">
            {applicationName} by <a href="https://www.accenture.com">Accenture</a> ©2017 All Rights Reserved.
        </div>
        <div className="clearfix"></div>
    </footer>
);