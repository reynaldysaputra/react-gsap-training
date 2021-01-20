import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './1.BasicGSAP/01_basic/apps';
import Tweens from './1.BasicGSAP/02_tween/apps';
import Timelines from './1.BasicGSAP/03_timeline/apps';
import AppsReveal from './1.BasicGSAP/04_reveal/apps';
import CountPlugin from './1.BasicGSAP/06_CountPlugin/apps';
import CssRulePlugin from './2.PluginTraining/01_cssRulePlugin/apps';
import BasicSvg from './2.PluginTraining/02_drawSvgPlugin/01_basic';
import Coba from './2.PluginTraining/03_Flip/a';
import AppsFlip from './2.PluginTraining/03_Flip/apps';
import AppsScrollMagic1 from './3_ScrollMagic+GSAP/01_basic/apps';

ReactDOM.render(
  <React.StrictMode>
    <AppsScrollMagic1/>
  </React.StrictMode>,
  document.getElementById('root')
);
