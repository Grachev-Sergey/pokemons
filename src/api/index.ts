import axios from 'axios';

import { baseUrl } from '../utils/config';

const customAxios = axios.create({
  baseURL: `${baseUrl}`,
});

export default customAxios;
