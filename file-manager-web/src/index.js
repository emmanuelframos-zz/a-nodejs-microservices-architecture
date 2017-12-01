import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import registerHttpInterceptors from "./registerHttpInterceptors";

import routes from './config/routesConfig';

ReactDOM.render(
    routes,
    document.getElementById('app')
);

registerServiceWorker();

registerHttpInterceptors();