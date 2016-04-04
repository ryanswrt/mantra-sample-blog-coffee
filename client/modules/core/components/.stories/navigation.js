import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
const Navigation = require('../navigation.coffee');

storiesOf('core.Navigation', module)
  .add('default view', () => {
    return (
      <Navigation />
    );
  });
