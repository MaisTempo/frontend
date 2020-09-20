import axios from 'axios';

const api = axios.create({
  baseURL: 'https://maistempo.herokuapp.com'
})

export default api;