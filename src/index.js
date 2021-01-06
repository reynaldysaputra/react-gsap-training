import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './01_basic/apps';
import Tweens from './02_tween/apps';
import Timelines from './03_timeline/apps';

ReactDOM.render(
  <React.StrictMode>
    <Timelines/>
  </React.StrictMode>,
  document.getElementById('root')
);
