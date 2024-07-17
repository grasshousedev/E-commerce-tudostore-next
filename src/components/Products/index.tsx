import { ProductsProtocol } from '../../domain/products/products-protocol';

import Product from './Product';

import { Container } from './styled';

export type ProductsProps = {
  products: ProductsProtocol;
};

export default function Products({ products }: ProductsProps) {
  return (
    <Container>
      {products.products.map((product) => (
        <Product
          key={product.id}
          thumbnail={product.thumbnail}
          title={product.title}
          brand={product.brand}
          price={product.price}
        />
      ))}
    </Container>
  );
}
