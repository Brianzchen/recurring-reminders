import noteKey from 'service/noteKey';

export default {
  value: localStorage.getItem(noteKey) || '',
};
