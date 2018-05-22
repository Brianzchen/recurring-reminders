import { noteKey } from './storageKeys';

export default note => {
  localStorage.setItem(noteKey, note);
};
