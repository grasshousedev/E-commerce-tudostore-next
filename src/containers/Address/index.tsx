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
              name: 'cardholder-name',
              id: 'cardholder-name',
              placeholder: 'Rebeca de Assis Machado',
              value: '',
              onChange: () => undefined,
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
              onChange: () => undefined,
            },
            label: {
              content: 'Numero do cartão',
              htmlFor: 'card-number',
            },
          },
          {
            input: {
              className: 'grey-placeholder pdg-l',
              type: 'text',
              name: 'new-name-to-it',
              id: 'new-name-to-it',
              placeholder: '',
              value: '',
              onChange: () => undefined,
            },
            label: {
              content: 'Numero do cartão',
              htmlFor: 'new-name-to-it',
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
