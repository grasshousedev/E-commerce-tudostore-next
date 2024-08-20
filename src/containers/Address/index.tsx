import Form from '../../components/Form';

import { CardSection } from '../../styles/card';
import { Container } from './styled';

const NewAddress = () => {
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
              value: '',
              onChange: () => undefined,
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
              value: '',
              onChange: () => undefined,
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
              value: '',
              onChange: () => undefined,
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
              value: '',
              onChange: () => undefined,
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
              placeholder: 'Brasil',
              value: '',
              onChange: () => undefined,
            },
            label: {
              content: 'País',
              htmlFor: 'country-name',
            },
          },
          {
            input: {
              className: 'grey-placeholder pdg-l',
              type: 'checkbox',
              name: 'default-address',
              id: 'default-address',
              checked: false,
              onChange: () => undefined,
            },
            label: {
              content: 'Salvar como endereço padrão',
              htmlFor: 'default-address',
            },
          },
        ]}
        onSubmitAction={(e) => e.preventDefault()}
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
