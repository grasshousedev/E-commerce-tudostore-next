export const getLSItem = (itemName: string) => {
  return JSON.parse(localStorage.getItem(itemName));
};

export const setLSItem = <T>(itemName: string, items: T | T[]) => {
  localStorage.setItem(itemName, JSON.stringify(items));
};

// LS item must be a array to work
export const setPushLSItem = <T>(itemName: string, item: T) => {
  let currentItems: T[] = getLSItem(itemName);
  if (Array.isArray(currentItems)) {
    currentItems.push(item);
  } else {
    currentItems = [item];
  }
  localStorage.setItem(itemName, JSON.stringify(currentItems));
};

// LS item must be a array to work
export const setRemoveLSItem = <T>(itemName: string, item: T) => {
  const currentItems: T[] = getLSItem(itemName);
  if (Array.isArray(currentItems) && currentItems.indexOf(item) !== -1) {
    currentItems.splice(currentItems.indexOf(item), 1);
    localStorage.setItem(itemName, JSON.stringify(currentItems));
  }
};
