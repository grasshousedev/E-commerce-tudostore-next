export type BagDataConverted = {
  id: number;
  repeat: number;
};

export const convertBagToObjectData = (bagItems: number[]): BagDataConverted[] => {
  const bagObjectDataArray = [];

  const uniqueArray = bagItems.reduce((accumulator, value) => {
    if (!accumulator.includes(value)) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);

  uniqueArray.forEach((itemId) => {
    let repeatTimes = 0;
    bagItems.forEach((repeatItemId) => {
      if (itemId === repeatItemId) {
        repeatTimes++;
      }
    });
    bagObjectDataArray.push({ id: itemId, repeat: repeatTimes });
  });

  return bagObjectDataArray;
};
