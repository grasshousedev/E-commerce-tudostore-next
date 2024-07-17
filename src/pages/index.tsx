import { GetStaticProps } from 'next';

import HomePage from '../containers/Home';

import { getAllProducts } from '../data/products/getAll';

import { ProductsProtocol } from '../domain/products/products-protocol';

export type HomeProps = {
  products: ProductsProtocol;
};

export default function Home({ products }: HomeProps) {
  return <HomePage products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
  };
};
