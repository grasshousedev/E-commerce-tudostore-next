export const getLSItem = (itemName: string) => {
  return JSON.parse(localStorage.getItem(itemName));
};

export const setLSItem = <T>(itemName: string, items: T | T[]) => {
  localStorage.setItem(itemName, JSON.stringify(items));
};
