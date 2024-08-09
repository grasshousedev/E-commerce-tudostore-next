import Form from '../../components/Form';

import { Container } from './styled';

export default function Profile() {
  return (
    <Container>
      <header>
        <h1>Se cadastre ou faça o login</h1>
        <p>Crie uma conta ou entre com seu email e senha.</p>
      </header>
      <Form
        title="<h2>Se cadastre</h2>"
        fields={[
          {
            input: {
              type: 'text',
              name: 'email',
              id: 'email',
              placeholder: 'exemplo@gmail.com',
              value: '',
              onChange: () => {},
            },
            label: {
              content: 'Email',
              htmlFor: 'email',
            },
          },
          {
            input: {
              type: 'password',
              name: 'password',
              id: 'password',
              placeholder: 'exemplo123abc',
              value: '',
              onChange: () => {},
            },
            label: {
              content: 'Senha',
              htmlFor: 'password',
            },
          },
          {
            input: {
              type: 'confirm-password',
              name: 'confirm-password',
              id: 'confirm-password',
              placeholder: 'exemplo123abc',
              value: '',
              onChange: () => {},
            },
            label: {
              content: 'Confirmar Senha',
              htmlFor: 'confirm-password',
            },
          },
        ]}
        onSubmitAction={(e) => {
          // Simulate submit action
          e.preventDefault();
          console.log('Form submitted');
        }}
        submitBtnContent="Cadastrar-se"
      />
    </Container>
  );
}
