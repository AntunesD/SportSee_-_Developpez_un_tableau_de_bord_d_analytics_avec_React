import axios from 'axios';

const baseURL = 'http://localhost:3000/user/';

const api = axios.create({
  baseURL,
  timeout: 10000, // timeout de 10 secondes, ajustez selon besoins
});

export { api };
