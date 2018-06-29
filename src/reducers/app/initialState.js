import { hiddenKey } from 'service/storageKeys';

export default {
  hidden: !!localStorage.getItem(hiddenKey),
  quote: '',
};
