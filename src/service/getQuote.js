import { get } from 'service/http';

export default () => new Promise(resolve => {
  get('http://quotes.rest/qod.json').then(xhr => {
    const result = JSON.parse(xhr.responseText);
    resolve(result.contents.quotes[0].quote);
  }, xhr => {
    console.error(`request to get quote failed with code: ${xhr.status}`);
    resolve('Failure is not falling down, but refusing to get up');
  });
});
