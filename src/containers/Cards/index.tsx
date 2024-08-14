import { IoCard } from 'react-icons/io5';
import { useClosedPage } from '../../hooks/closedPage';

import { useUserContext } from '../../contexts/user';

import { creditCardType } from '../../utils/checkCreditCard';

import Form from '../../components/Form';

import { CardSection, ContainerCardBottom } from '../../styles/card';
import { Container } from './styled';

const SelectCard = () => {
  const { cards } = useUserContext();

  return (
    <CardSection>
      <header>
        <h1 className="title-all-uppercase-spaced">Selecione um cartão</h1>
      </header>
      <ContainerCardBottom>
        <div className="container-left">
          {cards.length > 0 ? (
            cards.map(
              (card, i) =>
                card.isDefault && (
                  <div key={i}>
                    <div className="card-info">
                      <IoCard />
                      <span>
                        {creditCardType(card.cardNumbers)} terminando com{' '}
                        <span>
                          {card.cardNumbers.slice(card.cardNumbers.length - 4, card.cardNumbers.length)}
                        </span>
                      </span>
                    </div>
                  </div>
                ),
            )
          ) : (
            <div className="empty">
              <p>Parece que você não tem nenhum cartão cadastrado, adicione um novo cartão</p>
            </div>
          )}
        </div>
      </ContainerCardBottom>
    </CardSection>
  );
};

const AddNewCard = () => {
  return (
    <CardSection className="m-padding">
      <header>
        <h1 className="title-all-uppercase-spaced">Adicionar novo cartão</h1>
      </header>
      <Form
        fields={[
          {
            input: {
              type: 'text',
              name: 'cardholder-name',
              id: 'cardholder-name',
              placeholder: 'Rebeca de Assis Machado',
              value: '',
              onChange: () => {},
            },
            label: {
              content: 'Nome no cartão',
              htmlFor: 'cardholder-name',
            },
          },
          {
            input: {
              className: 'grey-placeholder pdg-l',
              type: 'text',
              name: 'card-number',
              id: 'card-number',
              placeholder: '💳  5126-5987-2214-7621',
              value: '',
              onChange: () => {},
            },
            label: {
              content: 'Numero do cartão',
              htmlFor: 'card-number',
            },
          },
          {
            input: {
              type: 'date',
              name: 'expiry-date',
              id: 'expiry-date',
              placeholder: 'Exemplo0Ab#',
              value: '',
              onChange: () => {},
            },
            label: {
              content: 'Data de validade',
              htmlFor: 'expiry-date',
            },
            input2: {
              type: 'number',
              name: 'cvc',
              id: 'cvc',
              placeholder: '123',
              value: '',
              onChange: () => {},
            },
            label2: {
              content: 'CVC',
              htmlFor: 'cvc',
            },
          },
        ]}
        onSubmitAction={(e) => e.preventDefault()}
        submitBtnContent={
          <>
            <IoCard />
            <span>Adicionar forma de pagamento</span>
          </>
        }
        footer={{
          backButton: {
            onClick: () => history.back(),
            content: 'Voltar',
          },
        }}
      />
    </CardSection>
  );
};

export default function Cards() {
  const { LSLoaded, isClosed } = useClosedPage('/profile/cards');

  return (
    LSLoaded &&
    !isClosed && (
      <Container>
        <SelectCard />
        <AddNewCard />
      </Container>
    )
  );
}
