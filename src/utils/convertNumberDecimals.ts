export const convertNumberDecimals = (rating: number, decimals: number): number => {
  return Number(rating.toFixed(decimals));
};
