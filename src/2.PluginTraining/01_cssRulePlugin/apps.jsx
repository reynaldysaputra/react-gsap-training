import React, { Fragment, useRef } from 'react';
import style from './style.module.css';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import gsap from 'gsap/gsap-core';
import { Controls, PlayState, Tween,Timeline } from 'react-gsap';

gsap.registerPlugin(CSSRulePlugin);

function CssRulePlugin() {
   const ref = useRef(null);

   return(
      <Fragment>
         <Controls playState={PlayState.pause}>
            <Tween
               duration={.5}
               to={CSSRulePlugin.getRule('::after'), {duration: .5, backgroundColor: "blue"}}
            >
               <div className={`${style.box} ${style.box1}`}>  
                  BOX 1
               </div>
            </Tween>
         </Controls>
      </Fragment>
   )
}

export default CssRulePlugin;