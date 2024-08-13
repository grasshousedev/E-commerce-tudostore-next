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
          <Link className="logo" href="/">
            <Image src={logo} alt="Logo da página" />
          </Link>
          <Link href="/" className={`${pathname === '/' ? 'in' : ''}`}>
            <IoStorefront />
          </Link>
          <Link href="/bag" className={`${pathname === '/bag' ? 'in' : ''}`}>
            <IoBagHandle />
          </Link>
        </nav>
        <div className="me">
          <Link href="/profile" className={`${pathname === '/profile' ? 'in' : ''}`}>
            <IoPerson />
          </Link>
        </div>
      </Container>
    )
  );
}
