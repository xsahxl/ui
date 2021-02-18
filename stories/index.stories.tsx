import * as React from 'react';
import { storiesOf } from '@storybook/react';
import WindComponent from '../src/index'

storiesOf('WindComponent', module)
  .add('WindComponent', () => {
   return (<div id="app-wrapper">
      <div id="app">
       <WindComponent />
      </div>
    </div>);
  })
