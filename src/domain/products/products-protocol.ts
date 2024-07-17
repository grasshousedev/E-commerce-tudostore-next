import { ProductProtocol } from './product-protocol';

export interface ProductsProtocol {
  products: ProductProtocol[];
  total: number;
  skip: number;
  limit: number;
}
