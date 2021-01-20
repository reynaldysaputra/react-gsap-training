import React, { Fragment } from 'react';
import { PlayState, Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

function TrainingPin1() {
   return(
      <Fragment>
         <div style={{width:'100%',height:'50vh',background:'red'}}></div>
         <div style={{width:'100%',height:'250vh',background:'lightskyblue',overflow:'hidden'}}>
            <Controller>
               <Scene duration={1000} triggerElement='#containerImg1' pin indicators={true}>
                  {(progress) => (
                     <div style={{marginTop:'29%'}} id='containerImg1'>
                        <Timeline 
                           totalProgress={progress} 
                           paused
                           target={
                              <>                              
                                 <img 
                                    src="https://webstockreview.net/images/twitter-bird-png-transparent-6.png"
                                    style={{width:'20%'}}
                                 />
                                 <h1 style={{fontSize:40}}>Hello word</h1>
                              </>
                           }
                        >
                           <Tween to={{x:'60vw',y:-380}} ease="power2.out" target={0}/>
                              <Tween
                                 from={{ opacity: 0}}
                                 to={{ opacity: 1}}
                                 target={1}
                              />
                              <Tween
                                 to={{ x: '110%' }}
                                 target={1}
                              />
                        </Timeline>
                     </div>
                  )}
               </Scene>
            </Controller>
         </div>
         <div style={{width:'100%',height:'100vh',background:'green'}}></div>
      </Fragment>
   )
}

export default TrainingPin1;