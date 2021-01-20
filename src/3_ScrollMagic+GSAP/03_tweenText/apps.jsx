import React, { Fragment } from 'react';
import { Controls, PlayState, SplitChars, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

function TweenTextAnimation(){
   return(
      <Fragment>
         <div style={{width:'100%',height:'210vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Controller>    
               <Scene indicators={true} duration={200} triggerElement='#pembungkus' triggerHook='.5'>
                  {(progress) => (
                     <Tween
                        from={{x:'-100vw',rotate:-720}}
                        to={{x:'0vw',rotate:0,ease:'expo.out'}}
                        stagger={{each:'.3'}}
                        totalProgress={progress}
                        wrapper={<div id='pembungkus' />}
                        paused
                     >
                        <SplitChars
                           wrapper={<div style={{display:'inline-block',fontSize:'5rem',fontFamily:'sans-serif',fontWeight:'bold'}} />}
                        >
                           REYNALDY SAPUTRA
                        </SplitChars>
                     </Tween>
                   )}
               </Scene>

               <Scene indicators={true}  triggerElement='#pembungkus2' triggerHook='.5'>
                  {(progress) => (
                     <Tween
                        from={{x:'-100vw',rotate:-720}}
                        to={{x:'0vw',rotate:0,ease:'expo.out'}}
                        stagger={{each:.1}}
                        playState={progress === 1 ? PlayState.play : PlayState.reverse}
                        wrapper={<div id='pembungkus2' style={{marginTop:'20%'}} />}
                        paused
                     >
                        <SplitChars
                           wrapper={<div style={{display:'inline-block',fontSize:'5rem',fontFamily:'sans-serif',fontWeight:'bold'}} />}
                           >
                           BAGUS PRATAMA MAJID
                        </SplitChars>
                     </Tween>
                  )}
               </Scene>
            </Controller>
         </div>
      </Fragment>
   )
}

export default TweenTextAnimation;