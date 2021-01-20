import React, { Fragment } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

function TrainingPin3() {
   const styleWrapper = {
      width:'100%',
      height:'100vh',
      overflow:'hidden',
   }

   return(
      <Fragment>
         <Controller>
            <Scene triggerHook='onLeave' duration={'200%'} pin>
                  <Timeline
                     wrapper={<div style={styleWrapper} />}
                  >
                     <div style={{width:'100%',height:'100vh',background:'lightblue',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                        <h1>Panel</h1>
                     </div>
                     <Tween from={{x:'-100vw'}} to={{x:'0vw'}}>
                        <div style={{width:'100%',height:'100vh',background:'lightgreen',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                           <h1>Panel</h1>
                        </div>
                     </Tween>
                     <Tween from={{x:'100vw'}} to={{x:'0vw'}}>
                        <div style={{width:'100%',height:'100vh',background:'#5e2121',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                           <h1>Panel</h1>
                        </div>
                     </Tween>
                     <Tween from={{y:'-100vw'}} to={{y:'0vw'}}>
                        <div style={{width:'100%',height:'100vh',background:'#212f6d',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute'}}>
                           <h1>Panel</h1>
                        </div>
                     </Tween>
                  </Timeline>
            </Scene>
         </Controller>
      </Fragment>
   )
}

export default TrainingPin3;