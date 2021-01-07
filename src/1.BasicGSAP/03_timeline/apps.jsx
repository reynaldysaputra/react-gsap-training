import React, { Fragment, useRef } from 'react';
import {Controls, PlayState, Timeline,Tween} from 'react-gsap';
import styled from 'styled-components';
import {Box1} from './boxComponent';
import {ThreeText} from './boxComponent';
import style from './style.module.css';

const Box = styled.div`
   width:100px;
   height:100px;
   background-color:red;
`;

function Timelines(){
   const ref = useRef();

   return(
      <Fragment>
         <Controls playState={PlayState.pause}>
            <Timeline
               target={<Box1/>}
            >
               <Tween from={{opacity:0}} to={{opacity:1}} playState={PlayState.play} />
               <Tween to={{x:500, backgroundColor:'green'}} />
               <Tween to={{rotate:180}} />
            </Timeline>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Timeline
               target={<div className={style.box1}></div>}
            >
               <Tween from={{x:'-100vw', opacity:0}} to={{x:'20vw', opacity:1}} />
               <Tween to={{width:'100%'}}>
                  <div className={style.box2}></div>
               </Tween>
            </Timeline>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Timeline
               target={(
                  <Fragment>
                     <div className={style.box1}>Component 1</div>
                     <div className={style.box2} style={{color:'white'}}>Component 2</div>
                  </Fragment>
               )}
               duration={.8}
            >
               <Tween to={{x:'5vw'}} target={0} />
               <Tween to={{x:'10vw'}} target={1} />
               <Tween to={{x:'15vw'}} target={0} />
               <Tween to={{x:'20vw'}} target={1} />
               <Tween to={{x:'20vw'}} target={0} />
            </Timeline>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Timeline target={<ThreeText/>}>
               <Tween from={{x:'-30vw', opacity:0}} to={{x:'30vw',opacity:1}} target='text1' position='0' />
               <Tween from={{ x: '-100vw' }} to={{x:'30vw'}} target="text2" position="1" stagger={0.1}  />
            </Timeline>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Timeline
               target={<div className={style.box1}></div>}
               labels={[
                  {
                     label : 'animate1',
                     position:0
                  },
                  {
                     label : 'animate2',
                     position:1
                  },
                  {
                     label : 'animate3',
                     position:2
                  },
                  {
                     label : 'animate4',
                     position:3
                  }
               ]}
            >
               <Tween from={{x:'70vw'}} to={{x:'50vw', opacity:0}} position='animate2' />
               <Tween to={{rotate:180, scale:1.5, opacity:1}} position='animate3' />
               <Tween to={{x:'70vw', opacity:1}} position='animate1' />
               <Tween to={{opacity:1, scale:.8, x:'0'}} position='animate4' />
            </Timeline>
         </Controls>
      </Fragment>
   )
}

export default Timelines;