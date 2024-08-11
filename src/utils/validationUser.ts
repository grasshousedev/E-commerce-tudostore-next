import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

export const validatePassword = (password: string) => {
  // Opções para validação
  const options = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  };

  // Verifica se a senha é forte
  const isStrong = validator.isStrongPassword(password, options);

  // Gera a mensagem de erro com base nos critérios de validação
  if (isStrong === true) {
    return { msg: 'Senha válida.', isValid: isStrong };
  }

  let errorMessage = 'Senha inválida.';

  // Mensagens detalhadas para cada critério não atendido
  if (password.length < options.minLength) {
    errorMessage += ' Deve ter pelo menos ' + options.minLength + ' caracteres.';
  }
  if (password.match(/[a-z]/g) === null || (password.match(/[a-z]/g) || []).length < options.minLowercase) {
    errorMessage += ' Deve conter pelo menos ' + options.minLowercase + ' letra(s) minúscula(s).';
  }
  if (password.match(/[A-Z]/g) === null || (password.match(/[A-Z]/g) || []).length < options.minUppercase) {
    errorMessage += ' Deve conter pelo menos ' + options.minUppercase + ' letra(s) maiúscula(s).';
  }
  if (password.match(/[0-9]/g) === null || (password.match(/[0-9]/g) || []).length < options.minNumbers) {
    errorMessage += ' Deve conter pelo menos ' + options.minNumbers + ' número(s).';
  }
  if (password.match(/[\W_]/g) === null || (password.match(/[\W_]/g) || []).length < options.minSymbols) {
    errorMessage += ' Deve conter pelo menos ' + options.minSymbols + ' símbolo(s).';
  }

  return { msg: errorMessage, isValid: isStrong };
};

export const validationGeral = (email: string, password: string, confirmPassword?: string) => {
  const errors: string[] = [];

  if (email.length > 0 && !isEmail(email)) {
    errors.push('E-mail inválido');
  }

  const { msg, isValid } = validatePassword(password);
  if (password.length > 0 && !isValid) {
    errors.push(msg);
  }

  if (confirmPassword && confirmPassword.length > 0 && confirmPassword !== password) {
    errors.push('As senhas não são iguais');
  }

  return errors;
};
