export const formatCreditCard = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .replace(/(.{4})/g, '$1-') // Adiciona traço a cada 4 dígitos
    .replace(/-$/, ''); // Remove traço final, se houver
};
