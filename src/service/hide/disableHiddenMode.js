import { hiddenKey } from '../storageKeys';

export default () => new Promise(resolve => {
  localStorage.setItem(hiddenKey, false);
  resolve();
});
