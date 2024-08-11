export const createTipEL = (content: string) => {
  const tipEl = document.createElement('span');
  tipEl.textContent = content;
  return tipEl;
};
