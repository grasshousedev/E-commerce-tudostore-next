export const validateGeral = (
  shippingName: string,
  streetName: string,
  cityName: string,
  stateName: string,
  countryName: string,
) => {
  const errors: string[] = [];

  if (shippingName.length > 0 && (shippingName.length < 3 || shippingName.length > 80)) {
    errors.push('Nome de destinatário tem que ter pelo menos 3 caracteres e máximo de 80');
  }

  if (streetName.length > 0 && (streetName.length < 5 || streetName.length > 85)) {
    errors.push('Nome da rua e Número tem que ter pelo menos 5 caracteres e máximo de 85');
  }

  if (cityName.length > 0 && (cityName.length < 1 || cityName.length > 85)) {
    errors.push('Nome da Cidade tem que ter pelo menos 1 caracter e máximo de 85');
  }

  if (stateName.length > 0 && (stateName.length < 1 || stateName.length > 41)) {
    errors.push('Estado tem que ter pelo menos 1 caracter e máximo de 41');
  }

  if (countryName.length > 0 && (countryName.length < 2 || countryName.length > 56)) {
    errors.push('Estado tem que ter pelo menos 2 caracteres e máximo de 56');
  }

  return errors;
};
