import React, { Fragment,useRef } from 'react';
import { SplitChars } from 'react-gsap';

export const Box1 = React.forwardRef((props,targets) => {
   return(
         <div style={{width:'100px',height:'100px',background:'red'}} ref={div => {
            targets.set('div1', div);
         }}>
            Timeline 
         </div>
   )
})

export const ThreeText = React.forwardRef((props, ref) => {
   return(
      <>
         <p ref={div => ref.set('text1', div)}>Reynaldy saputra</p>
         <SplitChars 
            ref={div => ref.set('text2', [div])}
            wrapper={<p style={{display:'inline-block'}}/>}
         >Bagus pratama majid</SplitChars>
         <p>Fery setiawan</p>
      </>
   )
})

