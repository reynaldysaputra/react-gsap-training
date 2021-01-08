import React, { Fragment, useEffect, useRef } from 'react';
import style from './style.module.css';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap, { TweenLite } from 'gsap/gsap-core';
import { Controls, PlayState, Tween,Timeline } from 'react-gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(CSSRulePlugin,TextPlugin);

function CssRulePlugin() {
   const ref = useRef(null);

   useEffect(() => {
      // gsap.to(CSSRulePlugin.getRule('::after')[0], 2,{cssRule:{backgroundColor:'black'},delay:2})
   }, [])

   return(
      <Fragment>
         <Controls playState={PlayState.pause}>
            <Timeline>
               <Tween
                  duration={1}
                  to={{text:'Hello Reynaldy :)', cssRule:{backgroundColor:'black'}}}
               >
                  <div className={`${style.box} ${style.box1}`}>  
                     BOX 1
                  </div>
               </Tween>
            </Timeline>
         </Controls>
      </Fragment>
   )
}

export default CssRulePlugin;