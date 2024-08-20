import { FaAddressCard } from 'react-icons/fa';
import { IoCard } from 'react-icons/io5';

import { useUserContext } from '../../contexts/user';

import { creditCardType } from '../../utils/checkCreditCard';

import Button from '../Button';

import { Card, ContainerCardBottom } from '../../styles/card';
import { ContainerCard } from './styled';

export type CardCardProps = {
  className?: string;
};

export default function CardCard({ className }: CardCardProps) {
  const { cards } = useUserContext();

  return (
    <Card className={className}>
      <header>
        <h2 className="title-all-uppercase-spaced">Método de pagamento</h2>
      </header>
      <ContainerCardBottom className="center-items">
        <div className="container-left">
          {cards.length > 0 ? (
            cards.map(
              (card, i) =>
                card.isDefault && (
                  <ContainerCard key={i}>
                    <div>
                      <FaAddressCard />
                      <span className="no-wrap">Nome: {card.cardName}</span>
                    </div>
                    <div>
                      <IoCard />
                      <span>
                        {creditCardType(card.cardNumber)} terminando com{' '}
                        <span>
                          {card.cardNumber.slice(card.cardNumber.length - 4, card.cardNumber.length)}
                        </span>
                      </span>
                    </div>
                  </ContainerCard>
                ),
            )
          ) : (
            <div className="empty">
              <p>Parece que você não tem nenhum cartão cadastrado, adicione um novo cartão</p>
            </div>
          )}
        </div>
        <div className="container-right">
          <Button className="outline" buttonType="link" href="/profile/cards">
            Mudar
          </Button>
        </div>
      </ContainerCardBottom>
    </Card>
  );
}
