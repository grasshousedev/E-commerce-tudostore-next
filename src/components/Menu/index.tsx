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
          </Link>
          <Link href="/" className={`page-link home-link ${pathname === '/' ? 'in' : ''}`}>
            <IoStorefront />
          </Link>
          <Link href="/bag" className={`page-link bag-link ${pathname === '/bag' ? 'in' : ''}`}>
            <IoBagHandle />
          </Link>
          <Link href="/profile" className={`page-link profile-link ${pathname === '/profile' ? 'in' : ''}`}>
            <IoPerson />
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
