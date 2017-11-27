import React from 'react';
import ComponentExample from '../ComponentExample';
import { ButtonToolbar, Button, Whisper, Popover } from 'rsuite';

const context = require('./index.md');
const examples = [
  require('./basic.md'),
  require('./trigger.md'),
];

export default () => {
  return (
    <ComponentExample
      dependencies={{
        ButtonToolbar,
        Button,
        Whisper,
        Popover
      }}
      context={context}
      examples={examples}
    />
  );
};