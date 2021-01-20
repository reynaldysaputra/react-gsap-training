import React, { Fragment } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

function AppsScrollMagic1(){
   return(
      <Fragment>
            <div style={{width:'100%',height:'100vh',background:'white'}}></div>
            <div style={{width:'100%',height:'300vh',background:'lightgreen'}} id='contain'>
               <Controller>
                  <Scene duration={300}  triggerHook={0} indicators={true} pin={true}>
                     <div style={{width:'90%',height:'10vh',background:'red'}}>Hello word</div>
                  </Scene>
                  <Scene duration={400}  triggerHook={0} indicators={true} pin={true}>
                     <div style={{width:'90%',height:'10vh',background:'blue'}}>Hello word</div>
                  </Scene>
                  <Scene duration={500}  triggerHook={0} indicators={true} pin={true}>
                     <div style={{width:'90%',height:'10vh',background:'yellow'}}>Hello word</div>
                  </Scene>
               </Controller>
            </div>
      </Fragment>
   )
}

export default AppsScrollMagic1;