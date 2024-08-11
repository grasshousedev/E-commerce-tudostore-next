import toast from 'react-hot-toast';

export const toastArrayRun = (array: string[], toastType: 'success' | 'error') => {
  toast.dismiss();
  if (toastType === 'success') array.forEach((msg) => toast(msg));
  else if (toastType === 'error') array.forEach((msg) => toast.error(msg));
};
