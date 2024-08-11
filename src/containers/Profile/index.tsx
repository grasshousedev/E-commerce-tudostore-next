import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { isEmail } from 'validator';

import { useUserContext } from '../../contexts/user';

import { createTipEL } from '../../utils/createTipEl';
import { validatePassword, validationGeral } from '../../utils/validationUser';
import { toastArrayRun } from '../../utils/runToastArray';

import Form from '../../components/Form';

import { Container } from './styled';

export default function Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectParam = searchParams.get('redirect');

  const { setUser } = useUserContext();
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (email.length > 256) return;
    setUserData({ ...userData, email });
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    if (email.length > 0 && !isEmail(email)) {
      const tipEl = createTipEL('E-mail inválido');
      tips.innerHTML = '';
      tips.appendChild(tipEl);
      return;
    }

    tips.innerHTML = '';
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    if (password.length > 32) return;
    setUserData({ ...userData, password });
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    const { msg, isValid } = validatePassword(password);

    if (password.length > 0 && !isValid) {
      const tipEl = createTipEL(msg);
      tips.innerHTML = '';
      tips.appendChild(tipEl);
      return;
    }

    tips.innerHTML = '';
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    if (confirmPassword.length > 32) return;
    setUserData({ ...userData, confirmPassword });
    const el = e.target.parentElement;
    const tips = el.querySelector('.container-tips');

    if (confirmPassword.length > 0 && userData.password !== confirmPassword) {
      const tipEl = createTipEL('As senhas não são iguais');
      tips.innerHTML = '';
      tips.appendChild(tipEl);
      return;
    }

    tips.innerHTML = '';
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userData.email.length === 0 ||
      userData.password.length === 0 ||
      userData.confirmPassword.length === 0
    ) {
      toast('Todos os campos são obrigatórios');
      return;
    }

    const validateGeral = validationGeral(userData.email, userData.password, userData.confirmPassword);

    if (validateGeral.length > 0) {
      toastArrayRun(validateGeral, 'error');
      return;
    }

    setUser({ isLoggedIn: true, email: userData.email, password: userData.password });
    setUserData({
      isLoggedIn: false,
      email: '',
      password: '',
      confirmPassword: '',
    });
    toast.success('Logado com sucesso');
    if (redirectParam) {
      router.push(redirectParam);
    }
  };

  console.log(redirectParam);

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
              value: userData.email,
              onChange: handleEmailChange,
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
              placeholder: 'Exemplo0Ab#',
              value: userData.password,
              onChange: handlePasswordChange,
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
              placeholder: 'Exemplo0Ab#',
              value: userData.confirmPassword,
              onChange: handleConfirmPasswordChange,
            },
            label: {
              content: 'Confirmar Senha',
              htmlFor: 'confirm-password',
            },
          },
        ]}
        onSubmitAction={handleSubmitForm}
        submitBtnContent="Cadastrar-se"
      />
    </Container>
  );
}
