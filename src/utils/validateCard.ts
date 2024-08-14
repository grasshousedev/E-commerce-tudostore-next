import { regexValidCard } from './regexsValidCard';

export const validateGeral = (cardName: string, cardNumber: string, expiryDate: string, cvc: string) => {
  const errors: string[] = [];

  if (cardName.length > 0 && !regexValidCard.cardName.test(cardName)) {
    errors.push('Nome do cartão inválido');
  }

  if (cardNumber.length > 0 && !regexValidCard.cardNumber.test(cardNumber)) {
    errors.push('Número de cartão inválido');
  }

  if (expiryDate.length > 0 && !regexValidCard.expiryDate.test(expiryDate)) {
    errors.push('Data de expiração inválida');
  }

  if (cvc.length > 0 && !regexValidCard.cvc.test(cvc)) {
    errors.push('CVC inválido');
  }

  return errors;
};
