'use strict';

import path from 'path';
import Axios from 'axios';

const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://zfapi.learnable.ai';
// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://52.14.99.43:2978';
// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://localhost:2978';
// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://47.94.99.252:2978';
// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://35.163.36.225:2978';
// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://47.89.186.64:2978';

// const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://18.219.27.220:2978';

Axios.defaults.baseURL = API_ADDRESS;
export { Axios };
