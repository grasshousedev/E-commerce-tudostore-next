import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllProducts } from '../../data/products/getAll';
import { getOneProduct } from '../../data/products/getOne';

import ProductPage from '../../containers/Product';

import { ProductProtocol } from '../../domain/products/product-protocol';

export type ProductProps = {
  product: ProductProtocol;
};

export default function Product({ product }: ProductProps) {
  return <ProductPage product={product} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProducts('limit=0&select=id');

  return {
    paths: products.map((product) => ({ params: { id: String(product.id) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const product = await getOneProduct(String(id));

  return {
    props: {
      product,
    },
  };
};
