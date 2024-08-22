import { ProductsProtocol } from '../../domain/products/products-protocol';
import { Fade } from 'react-awesome-reveal';

import Product from './Product';

import { Container } from './styled';

export type ProductsProps = {
  products: ProductsProtocol;
};

export default function Products({ products }: ProductsProps) {
  return (
    <Container>
      <Fade cascade direction="up" triggerOnce damping={0} duration={500}>
        {products.products.map((product, i) => (
          <Product
            key={i}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </Fade>
    </Container>
  );
}
