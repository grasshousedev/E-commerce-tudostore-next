import { useState, useEffect } from 'react';

import { IoSearch } from 'react-icons/io5';

import Products from '../../components/Products';

import { ProductsProtocol } from '../../domain/products/products-protocol';

import { Container, SearchBar } from './styled';

export type HomePageProps = {
  products: ProductsProtocol;
};

export default function Home({ products }: HomePageProps) {
  const [inputFocused, setInputFocused] = useState(false);
  const [userScrolled, setUserScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (userScrolled) return;
      setUserScrolled(true);
    });
  }, []);

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
      <Products products={products} />
    </Container>
  );
}
