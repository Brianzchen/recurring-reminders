import React, { Fragment } from 'react';
import { Route } from 'react-router';

import { onboard } from 'lib/locations';

import Onboard from './Onboard';
import Status from './Status';

const Auth = () => (
  <Fragment>
    <Status />
    <Route path={onboard} component={Onboard} />
  </Fragment>
);

export default Auth;
