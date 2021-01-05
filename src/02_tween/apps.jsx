import React, { Fragment, useState } from 'react';
import {Tween,Controls, PlayState} from 'react-gsap';
import style from './style.module.css';

function Tweens() {
   const [isPlay, setPlaying] = useState(false);
   const [isDisable, setDisable] = useState(false);
   const [progress, setProgress] = useState(0);

   return(
      <Fragment>
         <Controls playState={PlayState.stop}>
            <Tween to={{x:'90vw',rotation:180*5}} duration={.5}>
               <div style={{width:100,height:100,background:'blue'}}></div>
            </Tween>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Tween
               from={{opacity:0,x:'-30vw'}}
               to={{opacity:1,x:'90vw'}}
            >
               <div style={{width:100,height:100,background:'green'}}></div>
            </Tween>
         </Controls>
         
         <Controls playState={PlayState.pause}>
            <div className={style.container1}>
               <Tween
                  from={{scale:.2}}
                  to={{scale:1,boxShadow:'-5px 70px 23px -30px rgba(0,0,0,0.35)'}}
                  stagger={{repeat:-1,each:1,from:'center',yoyo:true,grid:'auto'}}
               >
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
                     <div className={style.box1}></div>
               </Tween>
            </div>
         </Controls>
         <Tween
            to={{x:`50vw`}}
            playState={isPlay ? PlayState.play : PlayState.stop}
            totalProgress={progress}
            duration={1}
            disabled={isDisable ? true : false}
         >
            <div style={{width:100,height:100,background:'violet'}}></div>
         </Tween>
         <button onClick={() => setPlaying(!isPlay)}>{isPlay ? 'Paused' : 'Play'}</button>
         <button onClick={() => setDisable(!isDisable)}>{isDisable ? 'Undisabled' : 'Disable'}</button>
         <input
            type="range"
            max="1"
            step="0.001"
            value={progress}
            onChange={event => setProgress(event.target.value)}
         />
      </Fragment>
   )
}

export default Tweens;
