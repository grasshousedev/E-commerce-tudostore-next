import { baseURL } from '../../services/axios';

export const getAllProducts = async (query?: string) => {
  const response = await baseURL.get(`${query ? `?${query}` : ''}`);
  return response.data;
};
