// make a func to convert a 4.13021.... to a number with floats that i want (the number of how many floats will be received in the parameters)
export const convertNumberDecimals = (rating: number, decimals: number): number => {
  return Number(rating.toFixed(decimals));
};
