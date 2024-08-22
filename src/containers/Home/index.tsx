import { useState, useEffect, useRef, ChangeEvent, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { IoSearch } from 'react-icons/io5';

import { paginationLimits } from '../../config/limits';

import { getAllProducts } from '../../data/products/getAll';
import { searchProducts } from '../../data/products/search';

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
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimeoutRef = useRef(null);

  const isNotPossibleToLoadMore = productsData.products.length >= productsData.total;

  const loadMoreProducts = useCallback(async () => {
    if (isNotPossibleToLoadMore) return;
    setIsLoadingMoreProducts(true);
    let moreProducts: ProductsProtocol; // < usar Promise<>
    if (inputSearchValue) {
      moreProducts = await searchProducts(
        `q=${inputSearchValue}&skip=${page * paginationLimits.homeProducts}&limit=${paginationLimits.homeProducts}`,
      );
    } else {
      moreProducts = await getAllProducts(
        `skip=${page * paginationLimits.homeProducts}&limit=${paginationLimits.homeProducts}`,
      );
    }
    const newObjProducts = {
      products: [...productsData.products, ...moreProducts.products],
      total: moreProducts.total,
      skip: moreProducts.skip,
      limit: moreProducts.limit,
    };
    setProductsData(newObjProducts);
    setPage(page + 1);
    setIsLoadingMoreProducts(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearchValue, page, productsData.products]);

  useEffect(() => {
    const handleScrollLoadMore = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoadingMoreProducts) {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
          loadMoreProducts();
        }, 0);
      }
    };

    window.addEventListener('scroll', handleScrollLoadMore);

    return () => {
      window.removeEventListener('scroll', handleScrollLoadMore);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [isLoadingMoreProducts, loadMoreProducts]);

  useEffect(() => {
    isLoading &&
      setProductsData({
        products: [],
        total: 0,
        skip: 0,
        limit: 0,
      });
  }, [isLoading]);

  const handleSearch = useDebouncedCallback(async (searchValue?: string) => {
    setIsLoading(true);
    const searchResult = await searchProducts(`q=${encodeURIComponent(searchValue)}`);
    setProductsData(searchResult);
    setIsLoading(false);
    setPage(1);
  }, 300);

  const handleActiveInputSearch = () => {
    setInputFocused(true);
  };

  const handleDeactivateInputSearch = () => {
    setInputFocused(false);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 146) return;
    setInputSearchValue(value);
    handleSearch(value);
  };

  return (
    <Container>
      <SearchBar className={`${userScrolled ? 'off' : ''} ${inputFocused ? 'focused' : ''}`}>
        <span className="info-search">Pesquise pelo item</span>
        <input
          id="input-search"
          type="text"
          placeholder={`${inputFocused || !userScrolled ? 'Macbook, Smartphone, Shirt, Food, Phone, ...' : ''}`}
          onFocus={handleActiveInputSearch}
          onBlur={handleDeactivateInputSearch}
          value={inputSearchValue}
          onChange={handleChangeInput}
        />
        {userScrolled && !inputFocused && (
          <label className="input-search-label" htmlFor="input-search">
            <IoSearch />
          </label>
        )}
      </SearchBar>
      <Products products={productsData} />
      {isLoadingMoreProducts && <LoadingMoreProducts />}
      {!isLoadingMoreProducts && !isNotPossibleToLoadMore && (
        <button className="btn-load-more" type="button" onClick={loadMoreProducts}>
          Carregar mais
        </button>
      )}
    </Container>
  );
}
