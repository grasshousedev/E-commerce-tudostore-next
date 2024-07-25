import { Container, ContainerLink } from './styled';

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
  type?: 'button' | 'submit' | 'reset';
  buttonType?: 'button' | 'link';
  href?: string;
  target?: string;
  rel?: string;
  as?: React.ElementType;
};

export default function Button({
  className,
  children,
  onClick,
  href,
  target = '_self',
  rel,
  as,
  type = 'button',
  buttonType = 'button',
}: ButtonProps) {
  return (
    <>
      {buttonType === 'button' && (
        <Container className={className} onClick={onClick ? onClick : undefined} type={type}>
          {children}
        </Container>
      )}
      {buttonType === 'link' && (
        <ContainerLink className={className} href={href} target={target} rel={rel} as={as} type={type}>
          {children}
        </ContainerLink>
      )}
    </>
  );
}
