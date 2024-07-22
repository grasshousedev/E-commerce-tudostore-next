// convert this "2024-05-23T08:56:21.618Z" to only date in br pattern
export const convertDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('pt-BR', options).format(date);
};
