export const jsonFetch = async (baseUrl: string, query) => {
  const url = `${baseUrl}${query ? `?${query}` : ''}`;
  const response = await fetch(url);
  return await response.json();
};
