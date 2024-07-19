import { ProductProtocol } from '../../domain/products/product-protocol';

export type ProductPageProps = {
  product: ProductProtocol;
};

export default function Product({ product }: ProductPageProps) {
  return <>{product.title}</>;
}
