const path = require('path');
const zipFolder = require('zip-folder');

zipFolder(
  path.resolve(__dirname, 'build'),
  path.resolve(__dirname, 'build.zip'),
  err => {
    if (err) {
      console.error('oh no!', err);
    } else {
      console.info('zip complete');
    }
  },
);
