export const convertMMYY = (value: string) => {
  if (value.length > 2) {
    return (value = value.slice(0, 2) + '/' + value.slice(2, 4));
  }
  return value;
};
