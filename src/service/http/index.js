export const get = endpoint => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr);
    } else {
      reject(xhr);
    }
  };
  xhr.send();
});
