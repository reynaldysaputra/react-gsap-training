import gsap from 'gsap/gsap-core';
import React, { Fragment, useRef, useState } from 'react';
import { Controls, PlayState } from 'react-gsap';
import style from './style.module.css';
import { Flipper, Flipped } from 'react-flip-toolkit'

function AppsFlip() {
   const ref = useRef();
   const newContainer = useRef();
   const [isFullScreen1, setScreen1] = useState(false);
   const [isFullScreen2, setScreen2] = useState(false);
   const [numbRandom, setNumbRandom] = useState([1,2,3,4,5,6,7,8,9]);
   const handleRandom = () => {
      let result;
      for (let index = 0; index < numbRandom.length - 1; index++) {
         const newIndex = Math.floor(Math.random() * (index + 1));
         [numbRandom[index], numbRandom[newIndex]] = [numbRandom[newIndex], numbRandom[index]];
      }

      setScreen1(!isFullScreen1)
   }

   const changeBox = () => {
      newContainer.current.appendChild(ref.current);
   }

   return(
      <Fragment>
         <Controls playState={PlayState.pause}>
            <div className={style.container1}>
               <div className={style.box} ref={ref}>
               </div>
               <button onClick={changeBox}>Pindah box</button>
               <div className={style.wadah} ref={newContainer}>

               </div>
            </div>
         </Controls>

         <h3>One Div</h3>
         <Flipper flipKey={isFullScreen1}>
            <Flipped flipId='1'>
               <div className={isFullScreen1 ? style.fullscreen : style.box} onClick={() => setScreen1(!isFullScreen1)}>

               </div>
            </Flipped>
         </Flipper>

         <h3>Two Div</h3>
         <Flipper flipKey={Math.random()} spring={"wobbly"}>
            {isFullScreen2 ? (
               <Flipped flipId='fullbox3'>
                  <div className={style.fullbox3} onClick={() => setScreen2(false)}></div>
               </Flipped> 
            ) : (
               <Flipped flipId='fullbox3'>
                  <div className={style.box3} onClick={() => setScreen2(true)}></div>
               </Flipped>
            )}
         </Flipper>

         <h3>Random Password 1-9</h3>
         <button onClick={handleRandom}>Generate</button>
         <Flipper flipKey={Math.random()} className={style.container2}>
            {numbRandom.map((item,i) => (
               <Flipped flipId={item} key={i}>
                  <h3>{item}</h3>
               </Flipped>
            ))}
         </Flipper>
      </Fragment>
   )
}

export default AppsFlip;