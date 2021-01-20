import React, { Fragment } from 'react';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

function AppsTween1() {
   return(
      <Fragment>
         <div style={{width:'100%',height:'200vh'}}>
            <Controller>
               <Scene duration={200} indicators={true} reverse={false} triggerHook='.3' triggerElement='#pembungkus'>
                  {(progress) => (
                     <div id='pembungkus'>
                        <Tween 
                           from={{x:'50vw',scale:.5}} to={{x:'0vw',rotate:360,scale:1}} 
                           totalProgress={progress}
                           paused 
                        >
                           <div style={{width:'30%',height:'30vh',background:'red',marginTop:'30%'}}>
                              Pin Test
                           </div>
                        </Tween>
                        <Tween
                           to={{scale:.3, rotate:190,width:'20%'}}
                           totalProgress={progress}
                           paused 
                        >
                           <div style={{width:'30%',height:'30vh',background:'red'}}>
                              Pin Test
                           </div>
                        </Tween>
                     </div>
                  )}
               </Scene>

               <Scene indicators={true} offset={-100} duration={'70%'}>
                  {(progress) => (
                     <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <Tween 
                           to={{x:'-40vw',ease: 'back.out(2)'}}
                            stagger={{from:'start',each:.2}}
                            totalProgress={progress}
                            paused
                        >
                           <div style={{width:'10%',height:'50px',background:'green'}}></div>
                           <div style={{width:'10%',height:'50px',background:'green'}}></div>
                           <div style={{width:'10%',height:'50px',background:'green'}}></div>
                           <div style={{width:'10%',height:'50px',background:'green'}}></div>
                           <div style={{width:'10%',height:'50px',background:'green'}}></div>
                           <div style={{width:'10%',height:'50px',background:'green'}}></div>
                        </Tween>
                     </div>
                  )}
               </Scene>

               <Scene indicators={true} reverse={true}>
                  <Tween from={{x:'0vw',transition:1}} to={{x:'50vw',scale:.5,transition:1}}>
                     <div style={{width:'30%',height:'30vh',background:'blue'}}/>
                  </Tween>
               </Scene>
            </Controller>
         </div>
      </Fragment>
   )
}

export default AppsTween1;