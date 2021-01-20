import React, { Fragment } from 'react';
import { Controls, Timeline, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import styled from 'styled-components';

const ParallaxStyled = styled.div`
  .section {
    height: 110vh;
  }
  .parallax {
    height: 400px;
    position: relative;
    overflow: hidden;
    background-color:blue;
    img {
      width: 100%;
      height: auto;
      position: absolute;
    }
    h2 {
      position: absolute;
      left: 200px;
      color:white;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;

const Parallax = () => (
  <ParallaxStyled>
    <Controller>
      <div className="section" />
      <Scene
        indicators={true}
        duration="200%"
        triggerHook="onEnter"
      >
        <Timeline
          wrapper={<div className="parallax" />}
        >
          <Tween
            position="0"
            from={{
              yPercent: -40,
            }}
            to={{
                yPercent: 5,
            }}
          >
            <img src="https://www.theadkx.org/wp-content/uploads/2020/04/Minnow-Pond-Guideboat_ADKX_Zoom.jpg" alt="" />
          </Tween>
          <Tween
          position="0"
            from={{
              top: '0%',
              scale: 1.5,
            }}
            to={{
              top: '70%',
              scale: 2,
            }}
          >
            <h2>Das ist ein Titel</h2>
          </Tween>
        </Timeline>
      </Scene>
      <div className="section" />
    </Controller>
  </ParallaxStyled>
);

export default Parallax;