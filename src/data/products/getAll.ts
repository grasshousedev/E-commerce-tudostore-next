import { baseURL } from '../../services/axios';

import { ProductsProtocol } from '../../domain/products/products-protocol';

export const getAllProducts = async (query?: string): Promise<ProductsProtocol> => {
  const response = await baseURL.get(`${query ? `?${query}` : ''}`);
  return response.data;
};
