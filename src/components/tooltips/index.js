import React from 'react';
import ComponentExample from '../ComponentExample';
import { Whisper, Tooltip, ButtonToolbar, Button } from 'rsuite';

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
        Tooltip
      }}
      context={context}
      examples={examples}
    />
  );
};