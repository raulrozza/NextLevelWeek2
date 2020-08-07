import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.16.105:5000',
});

export default api;
