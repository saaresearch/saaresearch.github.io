import React from 'react';
import styled from "styled-components";
import promo from "../assets/promo.mp4";

const MobileHome = () => {
    return (
        <Wrapper>
            <Video src={promo} autoPlay="autoplay" muted loop defaultMuted playsinline playsInline/>
            <Shadow/>
            <Title>ODRS</Title>
            <SubTitle>Open source recommendation system for training object detection models</SubTitle>
            <Button id="promo_btn" href={'https://github.com/saaresearch/ODRS'} target={'_blanc'}>
                <p id="button_p" style={{transition: 'all 0.3s ease'}}>Try ODRS for free</p>
                <svg id="button_svg" style={{transition: 'all 0.3s ease'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
            </Button>
        </Wrapper>
    );
};

export default MobileHome;
const Wrapper = styled.div`
    position: relative;
    background: black;
    width: 100%;
    height: 100%;
    z-index: 1;
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`
const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.7);
  z-index: 3;
`
const Title = styled.h1`
  position: absolute;
  font-size: 100px;
  z-index: 5;
  top: 150px;
  left: calc(50% - 141px);
`
const SubTitle = styled.h2`
  position: absolute;
  font-size: 35px;
  z-index: 5;
  top: 40%;
  left: calc(50% - 150px);
`
const Button = styled.a`
  position: absolute;
  z-index: 999;
  left: calc(50% - 120px);
  bottom: 100px;
  border: 4px solid white;
  display: flex;
  gap: 8px;
  align-items: center;
  -webkit-appearance: none;
  background: white;
  outline: none;
  padding: 16px 24px;
  width: fit-content;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;

  p {
    font-weight: 600;
    font-size: 18px;
    color: black;
  }
  &:hover {
    p {
      color: rgb(2, 187, 187) !important;
    }

    svg {
      fill: rgb(2, 187, 187) !important;
    }
  }
`