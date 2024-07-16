import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Container } from './styled';

import logo from '../../assets/logo.svg';
import { IoStorefront, IoBagHandle, IoPerson } from 'react-icons/io5';

export default function Menu() {
  const { asPath } = useRouter();

  return (
    <Container>
      <nav>
        <Link className="logo" href="/">
          <Image src={logo} alt="Logo da página" />
        </Link>
        <Link href="/" className={`${asPath === '/' ? 'in' : ''}`}>
          <IoStorefront />
        </Link>
        <Link href="/cart" className={`${asPath === '/cart' ? 'in' : ''}`}>
          <IoBagHandle />
        </Link>
      </nav>
      <div className="me">
        <Link href="https://www.gabrieltomas.com.br" target="_blank">
          <IoPerson />
        </Link>
      </div>
    </Container>
  );
}
