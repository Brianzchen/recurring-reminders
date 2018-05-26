const path = require('path');
const zipFolder = require('zip-folder');

zipFolder(
  path.resolve(__dirname, 'build'),
  path.resolve(__dirname, 'build.zip'),
  err => {
    if(err) {
      console.log('oh no!', err);
    } else {
      console.log('Done');
    }
  },
);
