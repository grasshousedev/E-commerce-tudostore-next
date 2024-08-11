import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container } from './styled';

import logo from '../../assets/logo.svg';
import { IoStorefront, IoBagHandle, IoPerson } from 'react-icons/io5';

export default function Menu() {
  const { pathname } = useRouter();

  return (
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
  );
}
