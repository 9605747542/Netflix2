import axios from 'axios';
import { baseURL } from './Components/Constants/constant';
const instance = axios.create({
    baseURL: baseURL,
  });
  export default instance;