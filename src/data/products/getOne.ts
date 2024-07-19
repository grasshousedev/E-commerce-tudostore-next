import { baseURL } from '../../services/axios';

import { ProductProtocol } from '../../domain/products/product-protocol';

export const getOneProduct = async (id: string, query?: string): Promise<ProductProtocol> => {
  const response = await baseURL.get(`/${id}/${query ? `?${query}` : ''}`);
  return response.data;
};
