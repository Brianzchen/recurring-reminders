export default () => new Promise(resolve => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://quotes.rest/qod.json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      resolve(result.contents.quotes[0].quote);
    } else {
      console.error(`request to get quote failed with code: ${xhr.status}`);
      resolve('Failure is not falling down, but refusing to get up');
    }
  };
  xhr.send();
});
