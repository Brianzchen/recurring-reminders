import noteKey from './noteKey';

export default note => {
  localStorage.setItem(noteKey, note);
};
