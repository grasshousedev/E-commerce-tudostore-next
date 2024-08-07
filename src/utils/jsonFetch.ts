export const jsonFetch = async (baseUrl: string, query, useResponse: boolean = false) => {
  const url = `${baseUrl}${query ? `?${query}` : ''}`;
  const response = await fetch(url);
  if (useResponse) {
    const json = await response.json();
    return { response, json };
  }
  return await response.json();
};
