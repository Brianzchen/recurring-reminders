import React from 'react';

import Dialog from 'components/Dialog';

import Tab from './Tab';
import Tabs from './Tabs';

const Onboard = () => (
  <Dialog>
    <Tabs>
      <Tab name="Signup">
        signup
      </Tab>
      <Tab name="Login">
        login
      </Tab>
    </Tabs>
  </Dialog>
);

export default Onboard;
