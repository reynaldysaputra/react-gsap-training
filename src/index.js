import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './01_basic/apps';
import Tweens from './02_tween/apps';
import Timelines from './03_timeline/apps';
import AppsReveal from './04_reveal/apps';
import CountPlugin from './06_CountPlugin/apps';

ReactDOM.render(
  <React.StrictMode>
    <CountPlugin/>
  </React.StrictMode>,
  document.getElementById('root')
);
