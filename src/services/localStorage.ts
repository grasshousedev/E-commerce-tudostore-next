export const getLSItem = (itemName: string) => {
  try {
    return JSON.parse(localStorage.getItem(itemName));
  } catch (error) {
    return null;
  }
};

export const setLSItem = <T>(itemName: string, items: T | T[]) => {
  localStorage.setItem(itemName, JSON.stringify(items));
};
