import { hiddenKey } from '../storageKeys';

export default () => new Promise(resolve => {
  localStorage.removeItem(hiddenKey);
  resolve();
});
