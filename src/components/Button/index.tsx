import { Container } from './styled';

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({ className, children, onClick, type = 'button' }: ButtonProps) {
  return (
    <Container className={className} onClick={onClick} type={type}>
      {children}
    </Container>
  );
}
