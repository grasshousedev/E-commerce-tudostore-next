import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://dummyjson.com/products',
});
