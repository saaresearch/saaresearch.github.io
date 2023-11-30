import React from 'react';
import styled from 'styled-components'

const Try = () => {
    return (
        <Wrapper>
            <MainText id="text">
                Open source recommendation system for training object detection models
            </MainText>
            <Button id="promo_btn" href={'https://github.com/saaresearch/ODRS'} target={'_blanc'}>
                <p id="button_p" style={{transition: 'all 0.3s ease'}}>Try ODRS for free</p>
                <svg id="button_svg" style={{transition: 'all 0.3s ease'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
            </Button>
        </Wrapper>

    );
};

export default Try;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  bottom: 10%;
`
export const MainText = styled.h1`
  font-size: 22px;
  font-weight: 400;
  user-select: none;
`
const Button = styled.a`
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
    font-size: 22px;
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