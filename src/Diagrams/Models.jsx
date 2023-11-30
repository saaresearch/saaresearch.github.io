import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Flex} from "../sections/About";

const Models = ({tick}) => {
    const [activeBox, setActiveBox] = useState(-1);

    useEffect(()=>{
        if (tick >= 7) {
            setInterval(()=>{
                setActiveBox(prevIndex => (prevIndex + 1));
            }, 2500)
        }
    },[tick])


    return (
        <Wrapper>
            <Block isActive={activeBox >= 0}>
                Models
            </Block>
            <Flex>
                <HalfLeft isActive={activeBox >= 1}>
                    <Flex style={{gap:'0', alignItems: 'end'}}>
                        <Line isActive={activeBox >= 1}/>
                        <Block isActive={activeBox >= 2}>
                            Faster RCNN
                        </Block>
                    </Flex>
                    <Flex style={{gap:'0', alignItems: 'end'}}>
                        <Line isActive={activeBox >= 1}/>
                        <Block isActive={activeBox >= 2} style={{marginLeft: '-2px', height: '30%', width:'60%', padding: '0', fontSize: '16px'}}>
                            Mask RCNN
                        </Block>
                    </Flex>
                </HalfLeft>
                <HalfRight isActive={activeBox >= 3}>
                    <Flex style={{gap:'0', alignItems: 'end'}}>
                        <Line isActive={activeBox >= 3}/>
                        <Block isActive={activeBox >= 4} style={{marginLeft: '-2px', height: '30%', width:'60%', padding: '0', fontSize: '16px'}}>
                            YOLO
                        </Block>
                    </Flex>
                    <Flex style={{gap:'0', alignItems: 'end'}}>
                        <Line isActive={activeBox >= 3}/>
                        <Block isActive={activeBox >= 4} style={{marginLeft: '-2px', height: '30%', width:'60%', padding: '0', fontSize: '16px'}}>
                            SSD
                        </Block>
                    </Flex>
                </HalfRight>
            </Flex>
        </Wrapper>
    );
};

export default Models;

const HalfLeft = styled.div`
  width: 50%;
  margin-left: 10%;
  position: relative;
  transition: all 2s ease;
  
  &::after {
    width: 100%;
    height: 100%;
    display: block;
    content: 'Two stage';
    color: ${({ isActive }) => isActive ? 'rgba(255,255,255,0.9)' : 'gray'};
    transition: all 2s ease;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: absolute;
    top: 0;
    left: -40px;
    font-size: 15px;
  }
`
const HalfRight = styled.div`
  width: 50%;
  margin-left: 10%;
  position: relative;
  &::after {
    width: 100%;
    height: 100%;
    display: block;
    content: 'One stage';
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: absolute;
    color: ${({ isActive }) => isActive ? 'rgba(255,255,255,0.9)' : 'gray'};
    transition: all 2s ease;
    top: 0;
    left: -40px;
    font-size: 15px;
  }
`
const Line = styled.div`
  transition: all 2s ease;
  padding: 10% 0;
  border-bottom-left-radius: 4px;
  margin-top: -2px;
  width: 20%;
  border-left: ${({ isActive }) => isActive ? '2px solid rgba(255,255,255,0.9)' : '2px solid gray'};
  border-bottom: ${({ isActive }) => isActive ? '2px solid rgba(255,255,255,0.9)' : '2px solid gray'};
  
  @media (max-width: 768px) {
    padding: 30% 0 !important;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Block = styled.div`
  margin-left: -2px;
  height: 30%;
  width:100%;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  border: ${({ isActive }) => isActive ? '2px solid rgba(255,255,255,0.9)' : '2px solid gray'};
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: ${({ isActive }) => isActive ? 'rgba(0,255,255,0.9)' : 'gray'};
  transition: all 2s ease;
  z-index: 999;
  -webkit-box-shadow: ${({ isActive }) => isActive ? '1px 0px 28px -10px rgba(0, 221, 255, 0.85) inset' : ''};
  -moz-box-shadow: ${({ isActive }) => isActive ? '1px 0px 28px -10px rgba(0, 221, 255, 0.85) inset': ''};
  box-shadow: ${({ isActive }) => isActive ? '1px 0px 28px -10px rgba(0, 221, 255, 0.85) inset' : ''};
  @media (max-width: 768px) {
    padding: 4px 10px;
  }
`
