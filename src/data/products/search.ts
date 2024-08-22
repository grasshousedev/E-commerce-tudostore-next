import { baseURL } from '../../services/axios';

import { ProductsProtocol } from '../../domain/products/products-protocol';

export const searchProducts = async (query?: string): Promise<ProductsProtocol> => {
  const response = await baseURL.get(`/search/${query ? `?${query}` : ''}`);
  return response.data;
};
