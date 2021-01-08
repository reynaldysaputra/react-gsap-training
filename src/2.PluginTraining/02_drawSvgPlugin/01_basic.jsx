import React, { Fragment, useEffect, useRef, useState } from 'react';
import {Controls, PlayState, Timeline, Tween} from 'react-gsap';
import gsap from 'gsap/gsap-core';
import { Svg1 } from './component';

function BasicSvg() {

   return(
      <Fragment>

         <div style={{width:'100%',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Controls playState={PlayState.pause}>
               <svg width="682" height="141" viewBox="0 0 682 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 139L201 2L354 139L528 2L681 139" stroke="#AEAEAE" strokeWidth="5"/>
                     <Tween
                        from={{svgDraw: 0}}
                        to={{svgDraw:1}}
                        duration={2}
                        stagger={{yoyo:true,repeat:-1}}
                     >
                        <path d="M1 139L201 2L354 139L528 2L681 139" id='svg1' stroke="rgb(0, 70, 223)" strokeWidth="5"/>
                     </Tween>
               </svg>
            </Controls>
         </div>

         <div style={{width:'100%',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Controls playState={PlayState.pause}>
               <svg width="297" height="85" viewBox="0 0 297 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 81C23.4327 55.2049 30.428 16.1976 66 5C92.9437 -3.48152 138.071 8.93429 156 41C197.6 115.4 260.667 72 295 41"  stroke="#AEAEAE" strokeWidth="4"/>
                     <Timeline target={<path d="M2 81C23.4327 55.2049 30.428 16.1976 66 5C92.9437 -3.48152 138.071 8.93429 156 41C197.6 115.4 260.667 72 295 41" stroke="#14ff1b" strokeWidth="4"/>}>
                        <Tween
                           from={{svgDraw: [0.2,0.7]}}
                           to={{svgDraw: [0.1,0.4]}}
                           duration={2}
                           // stagger={{yoyo:true,repeat:-1}}
                        />
                        <Tween to={{fill:'black'}} />
                     </Timeline>
               </svg>
            </Controls>
         </div>

         <div style={{width:'100%',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Controls playState={PlayState.pause}>
               <svg id="bddd68f9-3b37-4f15-84df-5c72bc277bdb" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="905.33624" height="646.07075" viewBox="0 0 905.33624 646.07075" style={{width:'100%',height:'200px'}}>
                  <Tween
                     from={{svgDraw: 0}}
                     to={{svgDraw: 1}}
                     duration={2}
                  >
                     <path d="M452.93938,747.21984a296.198,296.198,0,0,0,94.979,21.98181c15.30017.95312,30.8888,1,46.10943-1.02164,13.3372-1.77151,26.88452-5.40624,38.00175-13.26973a56.3711,56.3711,0,0,0,22.00814-33.10279c3.3997-14.06136,1.96893-28.79325-2.88677-42.33648A105.48016,105.48016,0,0,0,627.9034,641.91c-9.24518-9.46255-22.19584-18.0703-36.04365-16.45011-13.311,1.55738-22.99164,12.31808-26.53688,24.76736-4.25047,14.92574.63982,30.71474,7.27143,44.15206C583.84319,717.1724,601.896,736.30456,623.276,749.908a146.88284,146.88284,0,0,0,71.739,22.98887c25.55573,1.1506,53.0421-4.775,73.178-21.287a64.08908,64.08908,0,0,0,21.61243-33.6266c3.57554-13.95914,2.64023-28.70111-.45389-42.65465-6.71715-30.29231-24.45978-56.33128-34.73332-85.32707a137.23042,137.23042,0,0,1-5.86324-21.74474c-.338-1.89756-3.22963-1.09346-2.89284.79752,5.31251,29.8284,22.12628,55.51107,33.16275,83.28925,10.05319,25.30329,16.03725,56.36762,1.14466,81.07364C766.77257,755.642,740.1671,766.47445,715.35419,769.24c-24.2619,2.70409-49.10036-1.64306-71.34253-11.58276-22.38637-10.00414-42.44841-25.58827-57.00311-45.38729-7.91092-10.76137-14.72585-22.95055-18.21992-35.89989-3.57673-13.25573-2.7379-28.271,6.72309-38.97713a26.29586,26.29586,0,0,1,16.348-8.933c6.60448-.82657,13.21839,1.02367,19.02285,4.10876,12.463,6.62408,21.73709,18.13708,28.89306,30.04345,7.39306,12.30083,12.60194,26.24354,13.11886,40.69741.48059,13.43784-3.04534,27.21538-11.1235,38.09309-16.678,22.45784-48.02324,25.184-73.74814,25.35633a293.20631,293.20631,0,0,1-92.85757-14.48733q-10.86618-3.55017-21.42841-7.94462c-1.78125-.73935-2.55806,2.16209-.79752,2.89284Z" transform="translate(-147.33188 -126.96463)" stroke='black' strokeWidth='3'/>
                  </Tween>
               </svg>
            </Controls>
         </div>

      </Fragment>
   )
}

export default BasicSvg;