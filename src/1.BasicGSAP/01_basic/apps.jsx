import React, { Fragment } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import style from './style.module.css';

function Basic() {
   return(
      <Fragment>
         <main className={style.main} id='main1'>
            <Controller>
               <Scene triggerElement='#main1' duration={100}  offset={80} triggerHook={0} indicators={true}>
                  {(progress) => (
                     <>
                              {console.log(progress)}
                        <Tween
                           to={{
                              x : 300
                           }}
                           totalProgress={progress}
                           paused
                           ease="Strong.easeOut"
                        >
                           <div className={style.box}></div>
                        </Tween>
                     </>
                  )}
               </Scene>
            </Controller>
            </main>
            <main style={{height:'100vh', background:'green'}}>

            </main>
      </Fragment>
   )
}

export default Basic;