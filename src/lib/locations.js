import { replace } from 'lodash';

// Pass in the path to transform and an object
// with key value pairs corresponding to the param to change
// and the new value
export const mapParams = (path, paramMapping) => {
  let newPath = path;

  const arr = Object.keys(paramMapping);
  for (let i = 0, len = arr.length; i < len; i++) {
    newPath = replace(newPath, `:${arr[i]}`, paramMapping[arr[i]]);
  }
  return newPath;
};

export const home = '/';

export const addNewReminder = '/new-reminder';

export const deleteReminder = '/delete/:reminderId';

export const onboard = '/onboard';
