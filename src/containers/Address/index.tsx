import { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

import { UserAddressProtocol, useUserContext } from '../../contexts/user';

import { createTipEL } from '../../utils/createTipEl';
import { validateGeral } from '../../utils/validateAddress';
import { toastArrayRun } from '../../utils/runToastArray';

import Form from '../../components/Form';

import { CardSection } from '../../styles/card';
import { Container } from './styled';

const createTipMsg = (el: HTMLElement, value: string, minCaracters: number) => {
  const tips = el.querySelector('.container-tips');

  if (value.length > 0 && value.length < minCaracters) {
    const tipEl = createTipEL(
      `Tem que ter pelo menos ${minCaracters} ${minCaracters > 1 ? 'caracteres' : 'caracter'}`,
    );
    tips.innerHTML = '';
    tips.appendChild(tipEl);
    return;
  }

  tips.innerHTML = '';
};

const NewAddress = () => {
  const { setAddress } = useUserContext();

  const [shippingName, setShippingName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [cityName, setCityName] = useState('');
  const [stateName, setStateName] = useState('');
  const [countryName, setCountryName] = useState('');

  const handleChangeShippingName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 80) return;
    setShippingName(value);

    createTipMsg(e.target.parentElement, value, 3);
  };

  const handleChangeStreetName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 85) return;
    setStreetName(value);

    createTipMsg(e.target.parentElement, value, 5);
  };

  const handleChangeCityName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 85) return;
    setCityName(value);

    createTipMsg(e.target.parentElement, value, 1);
  };

  const handleChangeStateName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 41) return;
    setStateName(value);

    createTipMsg(e.target.parentElement, value, 1);
  };

  const handleChangeCountryName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 56) return;
    setCountryName(value);

    createTipMsg(e.target.parentElement, value, 2);
  };

  const handleSubmitNewAddress = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      shippingName.length === 0 ||
      streetName.length === 0 ||
      cityName.length === 0 ||
      stateName.length === 0 ||
      countryName.length === 0
    ) {
      toast.dismiss();
      toast('Todos os campos são obrigatórios');
      return;
    }

    const addressErrors = validateGeral(shippingName, streetName, cityName, stateName, countryName);

    if (addressErrors.length > 0) {
      toastArrayRun(addressErrors, 'error');
      return;
    }

    const newAddress: UserAddressProtocol = {
      shippingName,
      streetName,
      cityName,
      stateName,
      countryName,
    };

    setAddress(newAddress);

    toast.success('Endereço adicionado com sucesso');
    setShippingName('');
    setStreetName('');
    setCityName('');
    setStateName('');
    setCountryName('');
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
              name: 'shipping-name',
              id: 'shipping-name',
              placeholder: 'Rebeca de Assis Machado',
              value: shippingName,
              onChange: handleChangeShippingName,
            },
            label: {
              content: 'Nome do destinatário',
              htmlFor: 'shipping-name',
            },
          },
          {
            input: {
              type: 'text',
              name: 'street-name',
              id: 'street-name',
              placeholder: 'Rua de Exemplo, N 20',
              value: streetName,
              onChange: handleChangeStreetName,
            },
            label: {
              content: 'Nome da Rua e Número',
              htmlFor: 'street-name',
            },
          },
          {
            input: {
              type: 'text',
              name: 'city-name',
              id: 'city-name',
              placeholder: 'Cidade de Exemplo',
              value: cityName,
              onChange: handleChangeCityName,
            },
            label: {
              content: 'Cidade',
              htmlFor: 'city-name',
            },
          },
          {
            input: {
              type: 'text',
              name: 'state-name',
              id: 'state-name',
              placeholder: 'Seu Estado',
              value: stateName,
              onChange: handleChangeStateName,
            },
            label: {
              content: 'Estado',
              htmlFor: 'state-name',
            },
          },
          {
            input: {
              type: 'text',
              name: 'country-name',
              id: 'country-name',
              placeholder: 'Brazil',
              value: countryName,
              onChange: handleChangeCountryName,
            },
            label: {
              content: 'País',
              htmlFor: 'country-name',
            },
          },
        ]}
        onSubmitAction={handleSubmitNewAddress}
        submitBtnContent={'Adicionar Endereço'}
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

export default function Address() {
  return (
    <Container>
      <NewAddress />
    </Container>
  );
}
