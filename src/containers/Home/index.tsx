import { useState, useEffect } from 'react';

import { IoSearch } from 'react-icons/io5';

import { paginationLimits } from '../../config/limits';

import { getAllProducts } from '../../data/products/getAll';

import { useUserScrolled } from '../../hooks/userScrolled';

import LoadingMoreProducts from '../../components/LoadingMoreProducts';
import Products from '../../components/Products';

import { ProductsProtocol } from '../../domain/products/products-protocol';

import { Container, SearchBar } from './styled';

export type HomePageProps = {
  products: ProductsProtocol;
};

export default function Home({ products }: HomePageProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const { userScrolled } = useUserScrolled();
  const [productsData, setProductsData] = useState(products);
  const [page, setPage] = useState(1);
  const [isLoadingMoreProducts, setIsLoadingMoreProducts] = useState(false);

  const loadMoreProducts = async () => {
    setIsLoadingMoreProducts(true);
    const moreProducts = await getAllProducts(
      `skip=${page * paginationLimits.homeProducts}&limit=${paginationLimits.homeProducts}`,
    );
    const newObjProducts = {
      products: [...productsData.products, ...moreProducts.products],
      total: moreProducts.total,
      skip: moreProducts.skip,
      limit: moreProducts.limit,
    };
    setProductsData(newObjProducts);
    setPage(page + 1);
    setIsLoadingMoreProducts(false);
  };

  useEffect(() => {
    if (productsData.products.length >= productsData.total || isLoadingMoreProducts) return;

    const handleScrollLoadMore = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoadingMoreProducts) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScrollLoadMore);

    return () => {
      window.removeEventListener('scroll', handleScrollLoadMore);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleActiveInputSearch = () => {
    setInputFocused(true);
  };

  const handleDeactivateInputSearch = () => {
    setInputFocused(false);
  };

  return (
    <Container>
      <SearchBar className={`${userScrolled ? 'off' : ''} ${inputFocused ? 'focused' : ''}`}>
        <span className="info-search">Pesquise pelo item</span>
        <input
          id="input-search"
          type="text"
          placeholder={`${inputFocused || !userScrolled ? 'Camiseta, Blusas, Moleton, Notebooks, Celulares, ...' : ''}`}
          onFocus={handleActiveInputSearch}
          onBlur={handleDeactivateInputSearch}
        />
        {userScrolled && !inputFocused && (
          <label className="input-search-label" htmlFor="input-search">
            <IoSearch />
          </label>
        )}
      </SearchBar>
      <Products products={productsData} />
      {isLoadingMoreProducts && <LoadingMoreProducts />}
      {!isLoadingMoreProducts && productsData.products.length < products.total && (
        <button className="btn-load-more" type="button" onClick={loadMoreProducts}>
          Carregar mais
        </button>
      )}
    </Container>
  );
}
