import { ChangeEvent, FormEvent, useState } from 'react';
import { IoCard } from 'react-icons/io5';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';
import toast from 'react-hot-toast';

import { useClosedPage } from '../../hooks/closedPage';

import { UserCardProtocol, useUserContext } from '../../contexts/user';

import { creditCardType } from '../../utils/checkCreditCard';
import { createTipEL } from '../../utils/createTipEl';
import { formatCreditCard } from '../../utils/convertCardNumber';
import { convertMMYY } from '../../utils/convertMMYY';
import { regexValidCard } from '../../utils/regexsValidCard';
import { validateGeral } from '../../utils/validateCard';
import { toastArrayRun } from '../../utils/runToastArray';

import Form from '../../components/Form';

import { CardSection, ContainerCardBottom } from '../../styles/card';
import { Container, ContainerCard } from './styled';

const SelectCard = () => {
  const { cards, setCards } = useUserContext();

  const handleSelectADefaultCard = (cardNumber: string) => {
    setCards(cards.map((card) => ({ ...card, isDefault: card.cardNumber === cardNumber })));
  };

  console.log(cards);

  return (
    <CardSection>
      <header>
        <h1 className="title-all-uppercase-spaced">Selecione um cartão</h1>
      </header>
      <ContainerCardBottom>
        <div className="container-left w-100">
          {cards.length > 0 ? (
            cards.map((card, i) => (
              <ContainerCard key={i} onClick={() => handleSelectADefaultCard(card.cardNumber)}>
                <div>
                  <IoCard />
                  <span className="plchldr">
                    {creditCardType(card.cardNumber)} terminando com{' '}
                    <span className="plchldr">
                      {card.cardNumber.slice(card.cardNumber.length - 4, card.cardNumber.length)}
                    </span>
                  </span>
                </div>
                <div className="check" onClick={() => handleSelectADefaultCard(card.cardNumber)}>
                  {card.isDefault ? <IoMdRadioButtonOn /> : <IoMdRadioButtonOff />}
                </div>
              </ContainerCard>
            ))
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
  const { cards, setCards } = useUserContext();

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [CVCValue, setCVCValue] = useState('');

  const handleChangeCardName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 45) return;
    setCardName(value);
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    if (value.length > 0 && !regexValidCard.cardName.test(value)) {
      const tipEl = createTipEL('Nome inválido');
      tips.innerHTML = '';
      tips.appendChild(tipEl);
      return;
    }

    tips.innerHTML = '';
  };

  const handleChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = formatCreditCard(e.target.value);
    if (value.length > 19) return;
    setCardNumber(value);
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    const clearAndAddTipEl = (errorMsg: string) => {
      const tipEl = createTipEL(errorMsg);
      tips.innerHTML = '';
      tips.appendChild(tipEl);
    };

    if (value.length > 0 && !regexValidCard.cardNumber.test(value)) {
      clearAndAddTipEl('Número de cartão inválido');
      return;
    }

    if (value.length > 0 && cardIsAlreadyIn(value)) {
      clearAndAddTipEl('Este cartão já está cadastrado');
      return;
    }

    tips.innerHTML = '';
  };

  const handleChangeExpiryDate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = convertMMYY(e.target.value.replace(/\D/g, ''));
    if (value.length > 5) return;
    setExpiryDate(value);
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    if (value.length > 0 && !regexValidCard.expiryDate.test(value)) {
      const tipEl = createTipEL('Data de expiração inválida');
      tips.innerHTML = '';
      tips.appendChild(tipEl);
      return;
    }

    tips.innerHTML = '';
  };

  const handleChangeCVC = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) return;
    setCVCValue(value);
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    if (value.length > 0 && !regexValidCard.cvc.test(value)) {
      const tipEl = createTipEL('CVC inválido');
      tips.innerHTML = '';
      tips.appendChild(tipEl);
      return;
    }

    tips.innerHTML = '';
  };

  const cardIsAlreadyIn = (newCardNumber: string) => {
    return cards.some((card) => card.cardNumber === newCardNumber);
  };

  const handleSubmitNewCard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      cardName.length === 0 ||
      cardNumber.length === 0 ||
      expiryDate.length === 0 ||
      CVCValue.length === 0
    ) {
      toast.dismiss();
      toast('Todos os campos são obrigatórios');
      return;
    }

    const cardErrors = validateGeral(cardName, cardNumber, expiryDate, CVCValue);

    if (cardErrors.length > 0) {
      toastArrayRun(cardErrors, 'error');
      return;
    }

    const newCard: UserCardProtocol = {
      cardName,
      cardNumber,
      cvc: CVCValue,
      expiryDate,
      isDefault: false,
    };

    if (cardIsAlreadyIn(newCard.cardNumber)) {
      toast.dismiss();
      toast('Cartão já cadastrado');
      return;
    }

    setCards([...cards, newCard]);
    toast.success('Cartão adicionado com sucesso');
    setCardName('');
    setCardNumber('');
    setExpiryDate('');
    setCVCValue('');
  };

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
              value: cardName,
              onChange: handleChangeCardName,
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
              value: cardNumber,
              onChange: handleChangeCardNumber,
            },
            label: {
              content: 'Numero do cartão',
              htmlFor: 'card-number',
            },
          },
          {
            input: {
              type: 'text',
              name: 'expiry-date',
              id: 'expiry-date',
              placeholder: 'MM/YY',
              value: expiryDate,
              onChange: handleChangeExpiryDate,
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
              value: CVCValue,
              onChange: handleChangeCVC,
            },
            label2: {
              content: 'CVC',
              htmlFor: 'cvc',
            },
          },
        ]}
        onSubmitAction={handleSubmitNewCard}
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
