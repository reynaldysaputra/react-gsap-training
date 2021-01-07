import React, { Fragment } from 'react';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import gsap from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

const styleBox = {
   width : 50,
   padding : '20px',
   background:'grey',
   textAlign:'center',
   color:'white',
   fontSize:24
}

function CountPlugin() {
   return(
      <Fragment>
         <Controls playState={PlayState.pause}>
            <Tween
               to={{
                  count : 100             
               }}   
               ease='none'
               duration={5}
            >
               <p style={styleBox}>10.00</p>
            </Tween>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Tween
               to={{
                  count : {
                     value : 100,
                     format : () => value => value.toFixed(1)
                  }             
               }}   
               ease='none'
               duration={100}
            >
               <p style={styleBox}>10.00</p>
            </Tween>
         </Controls>

         <Controls playState={PlayState.pause}>
            <Timeline>
               <Tween
                  to={{
                     count : {
                        value : 100,
                        format : () => value => `${value.toFixed()} %`
                     },
                     onStart : () => console.log('Your progress start'),
                     onComplete : () => alert('Your progress is complete :)')
                  }}
                  duration={5}
                  position={0}
               >
                  <h4>0</h4>
               </Tween>

               <div style={{width:'300px',height:'50px',border:'2px solid black'}}>
                  <Tween
                     to={{width:'300px',height:'50px',background:'green'}}
                     position={0}
                     duration={5}
                     ease='none'
                  >  
                     <div style={{width:0,height:'50px',background:'black'}}></div>
                  </Tween>
               </div>
            </Timeline>
         </Controls>
      </Fragment>
   )
}

export default CountPlugin;