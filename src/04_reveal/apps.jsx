import React from 'react';
import { Fragment } from 'react';
import { Reveal, Tween } from 'react-gsap';

const FadeInLeft = ({children}) => {
   return(
      <Tween from={{x:'-100vw', opacity:0}} to={{x:'0',opacity:1}}>
         {children}
      </Tween>
   )
}

function AppsReveal() {
   return(
      <div style={{height:'500vh'}}>
         <Reveal repeat>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat nemo accusantium ut enim necessitatibus quod, excepturi assumenda sequi. Dolor, ex? Quos ea sunt, necessitatibus itaque minus veritatis repudiandae eos, sapiente tenetur repellendus voluptatem ipsa doloribus quod, fugit animi. Dolore, repellendus ut tenetur distinctio in quam doloremque praesentium voluptatibus pariatur. Optio illo vitae doloribus accusantium hic ratione aspernatur quam quod dolor, officiis sapiente sunt, illum, vero numquam repellendus impedit molestiae natus id dolorem necessitatibus eligendi distinctio asperiores tenetur adipisci? Ipsam tempore amet praesentium eius minima. Voluptatum, nisi? Nobis minus ea debitis vitae provident a reprehenderit, officiis impedit, ipsum, unde deserunt.</p>
            <Tween from={{opacity:0}} to={{opacity:1}}>
               <div style={{width:'100%',height:'200px',background:"red"}}></div>
            </Tween>
         </Reveal>

         <Reveal repeat trigger={<div/>}>
            <FadeInLeft>
               <h3>Hello i'am back :)</h3>
            </FadeInLeft>
         </Reveal>
      </div>
   )
}

export default AppsReveal;