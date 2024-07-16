import { Container, SearchBar } from './styled';

export default function Home() {
  return (
    <Container>
      <SearchBar>
        <span className="info-search">Pesquise pelo item</span>
        <input type="text" placeholder="Camiseta, Blusas, Moleton, Notebooks, Celulares, ..." />
      </SearchBar>
    </Container>
  );
}
