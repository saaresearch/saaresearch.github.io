import React from 'react';
import styled from 'styled-components';
import promo from '../assets/promo.mp4';



const MainVideo = () => {

    return (
        <Video id="promo" src={promo} autoPlay="autoplay" muted loop defaultMuted playsinline/>
    );
};

export default MainVideo;

const Video = styled.video`
  object-fit: cover;
  position: absolute;
  width: 29vw;
  height: 29vw;
  border:6px solid rgba(255, 255, 255, 0.75);
  border-radius: 85px;
  left: 5%;
  bottom: 38%;
`
