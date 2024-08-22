import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoStorefront, IoBagHandle, IoPerson } from 'react-icons/io5';

import { focusPages } from '../../config/focusPages';

import logo from '../../assets/logo.svg';

import { Container } from './styled';

export default function Menu() {
  const { pathname } = useRouter();

  const inFocusPage = focusPages.menuComponent.includes(pathname);

  return (
    !inFocusPage && (
      <Container>
        <nav>
          <Link className="page-link home-redirect logo" href="/">
            <Image src={logo} alt="Logo da página" />
            <span>Tudo Store</span>
          </Link>
          <Link href="/" className={`page-link ${pathname === '/' ? 'in' : ''}`}>
            <IoStorefront />
            <span>Produtos</span>
          </Link>
          <Link href="/bag" className={`page-link ${pathname === '/bag' ? 'in' : ''}`}>
            <IoBagHandle />
            <span>Bolsa</span>
          </Link>
          <Link href="/profile" className={`page-link profile-link ${pathname === '/profile' ? 'in' : ''}`}>
            <IoPerson />
            <span>Perfil</span>
          </Link>
        </nav>
        <div className="me">
          <Link href="/profile" className={`page-link profile-link ${pathname === '/profile' ? 'in' : ''}`}>
            <IoPerson />
          </Link>
        </div>
      </Container>
    )
  );
}
