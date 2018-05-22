import { noteKey } from 'service/storageKeys';

export default {
  value: localStorage.getItem(noteKey) || '',
};
