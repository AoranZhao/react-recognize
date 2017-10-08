'use strict';

import path from 'path';
import Axios from 'axios';

// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://localhost:2978';
// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://47.94.99.252:2976';
const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://54.245.25.56:2976';

Axios.defaults.baseURL = API_ADDRESS;
export { Axios };
