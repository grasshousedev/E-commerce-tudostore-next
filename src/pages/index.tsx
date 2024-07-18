import { GetStaticProps } from 'next';

import { paginationLimits } from '../config/limits';

import { getAllProducts } from '../data/products/getAll';

import HomePage from '../containers/Home';

import { ProductsProtocol } from '../domain/products/products-protocol';

export type HomeProps = {
  products: ProductsProtocol;
};

export default function Home({ products }: HomeProps) {
  return <HomePage products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts(`limit=${paginationLimits.homeProducts}`);

  return {
    props: {
      products: products,
    },
  };
};
