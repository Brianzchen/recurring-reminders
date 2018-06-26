import { hiddenKey } from '../storageKeys';

export default () => {
  localStorage.setItem(hiddenKey, true);
};
