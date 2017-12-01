import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppContainer } from "../containers/AppContainer";
import { LoginContainer } from '../containers';
import { FormUploadContainer } from "../containers/FormUploadContainer";
import { MetadataContainer } from "../containers/MetadataContainer";
import { FormMetadataContainer } from "../containers/FormMetadataContainer";
import { NotFound } from "../components/NotFound";
import {
    signInRoute, homeRoute, uploadRoute, metadataRoute,
    createMetadataRoute, updateMetadataRoute
} from "../env";

const routes = (
    <Router>
        <div>
            <Switch>
                <Route exact path={homeRoute} component={AppContainer} />
                <Route path={signInRoute} component={LoginContainer} />
                <Route path={uploadRoute} component={FormUploadContainer} />
                <Route path={metadataRoute} component={MetadataContainer} />
                <Route path={createMetadataRoute} component={FormMetadataContainer} />
                <Route path={updateMetadataRoute} component={FormMetadataContainer} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default routes;