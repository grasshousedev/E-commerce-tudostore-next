export const regexValidCard = {
  cardName: RegExp(/^(?!\s*$).*\s+.*$/),
  cardNumber: RegExp(/^(?:\d{4}[-\s]?){3}\d{4}$|^\d{13,16}$/),
  expiryDate: RegExp(/^(0[1-9]|1[0-2])\/\d{2}$/),
  cvc: RegExp(/^\d{3}$/),
};
