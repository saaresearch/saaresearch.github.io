import React, {useEffect, useRef, useState} from 'react';
import styled, {css, keyframes} from 'styled-components'
import Models from "../Diagrams/Models";
import { useMediaQuery } from 'usehooks-ts'

const About = () => {
    const [activeBox, setActiveBox] = useState(-1);
    const elementRef = useRef(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const checkVisibility = () => {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = rect.top <= 50;
        if (isVisible) {
             setInterval(() => {
                if (activeBox < 15) {
                    setActiveBox(prevIndex => (prevIndex + 1));
                }
            }, 1000);
            window.removeEventListener('scroll', checkVisibility);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);
    return (
        <Wrapper>
            <Gradient/>
            <Half style={{justifyContent: 'space-between'}}>
                <Title>ABOUT</Title>
                <p>Our system allows you to choose the most profitable existing object recognition models based on user preferences and data. In addition to choosing the architecture of the model, the system will help you start training and configure the environment. The proposed recommendation system consists of several components that interact to generate recommendations for machine learning pipelines.</p>
                {isMobile &&
                    <Half ref={elementRef}>
                        <Flex>
                            <HalfBlock>
                                <TextLeft isActive={activeBox >= 0}>
                                    Dataset
                                </TextLeft>
                                <Box isActive={activeBox >= 0}>
                                    <p>Input data</p>
                                </Box>
                            </HalfBlock>
                            <HalfBlock>
                                <TextLeft isActive={activeBox >= 0}>
                                    Model
                                </TextLeft>
                                <Box isActive={activeBox >= 0}>
                                    <p>Yolov(5,7,8)</p>
                                    <p>Fast R-CNN</p>
                                    <p>SSD</p>
                                </Box>
                            </HalfBlock>
                        </Flex>
                        <Flex>
                            <BlockWrapper style={{flexDirection: 'row', gap: '65px'}}>
                                <Half style={{padding: '0'}}>
                                    <Arrow>
                                        <ArrowTop isActive={activeBox >= 1}/>
                                        <ArrowMiddle isActive={activeBox >= 1}/>
                                        <ArrowBot isActive={activeBox >= 1}/>
                                    </Arrow>
                                </Half>
                                <Half style={{padding: '0'}}>
                                    <Arrow>
                                        <ArrowTop isActive={activeBox >= 1}/>
                                        <ArrowMiddle isActive={activeBox >= 1}/>
                                        <ArrowBot isActive={activeBox >= 1}/>
                                    </Arrow>
                                </Half>
                            </BlockWrapper>
                        </Flex>

                        <Flex>
                            <BlockWrapper>
                                <TextUp isActive={activeBox >= 2}>
                                    The properties of sets and models are used to generate recommendations
                                </TextUp>
                                <Box isActive={activeBox >= 2}>
                                    <p>RecommendationEngine (Datasets, Model)</p>
                                </Box>
                            </BlockWrapper>
                        </Flex>
                        <Arrow>
                            <ArrowTop isActive={activeBox >= 3}/>
                            <ArrowMiddle isActive={activeBox >= 3}/>
                            <ArrowBot isActive={activeBox >= 3}/>
                        </Arrow>
                        <Flex>
                            <BlockWrapper>
                                <TextUp isActive={activeBox >= 4}>
                                    Recommended models are trained
                                </TextUp>
                                <Box isActive={activeBox >= 4}>
                                    <p>Training (Recommendation)</p>
                                </Box>
                            </BlockWrapper>
                        </Flex>
                        <Arrow>
                            <ArrowTop isActive={activeBox >= 5}/>
                            <ArrowMiddle isActive={activeBox >= 5}/>
                            <ArrowBot isActive={activeBox >= 5}/>
                        </Arrow>
                        <Flex>
                            <BlockWrapper>
                                <TextUp isActive={activeBox >= 6}>
                                    Assessment of the quality of the model
                                </TextUp>
                                <Box isActive={activeBox >= 6}>
                                    <p>Evaluation (Model)</p>
                                </Box>
                            </BlockWrapper>
                        </Flex>
                    </Half>
                }

                <div>
                    <p>External parameters (received from users and third-party resources):</p>
                    <ul style={{padding: '0 20px'}}>
                        <li>Dataset: Represents input data (video frames) and associated metadata (e.g. image size, quality, number of objects).</li>
                        <li>Model: Framework provides an opportunity to train the most popular object recognition models (including setting up the environment and choosing the architecture of a specific model). Considered two-stage detectors models such as Faster R-CNN and Mask R-CNN as well as one-stage detectors such as SSD and YOLO (including families v5, v7, v8).</li>
                    </ul>
                </div>
                <Models tick={activeBox}/>
                </Half>
            {!isMobile &&
                <Half ref={elementRef}>
                    <Flex>
                        <HalfBlock>
                            <TextLeft isActive={activeBox >= 0}>
                                Dataset
                            </TextLeft>
                            <Box isActive={activeBox >= 0}>
                                <p>Input data</p>
                            </Box>
                        </HalfBlock>
                        <HalfBlock>
                            <TextLeft isActive={activeBox >= 0}>
                                Model
                            </TextLeft>
                            <Box isActive={activeBox >= 0}>
                                <p>Yolov(5,7,8)</p>
                                <p>Fast R-CNN</p>
                                <p>SSD</p>
                            </Box>
                        </HalfBlock>
                    </Flex>
                    <Flex>
                        <BlockWrapper style={{flexDirection: 'row', gap: '65px'}}>
                            <Half style={{padding: '0'}}>
                                <Arrow>
                                    <ArrowTop isActive={activeBox >= 1}/>
                                    <ArrowMiddle isActive={activeBox >= 1}/>
                                    <ArrowBot isActive={activeBox >= 1}/>
                                </Arrow>
                            </Half>
                            <Half style={{padding: '0'}}>
                                <Arrow>
                                    <ArrowTop isActive={activeBox >= 1}/>
                                    <ArrowMiddle isActive={activeBox >= 1}/>
                                    <ArrowBot isActive={activeBox >= 1}/>
                                </Arrow>
                            </Half>
                        </BlockWrapper>
                    </Flex>

                    <Flex>
                        <BlockWrapper>
                            <TextUp isActive={activeBox >= 2}>
                                The properties of sets and models are used to generate recommendations
                            </TextUp>
                            <Box isActive={activeBox >= 2}>
                                <p>RecommendationEngine (Datasets, Model)</p>
                            </Box>
                        </BlockWrapper>
                    </Flex>
                    <Arrow>
                        <ArrowTop isActive={activeBox >= 3}/>
                        <ArrowMiddle isActive={activeBox >= 3}/>
                        <ArrowBot isActive={activeBox >= 3}/>
                    </Arrow>
                    <Flex>
                        <BlockWrapper>
                            <TextUp isActive={activeBox >= 4}>
                                Recommended models are trained
                            </TextUp>
                            <Box isActive={activeBox >= 4}>
                                <p>Training (Recommendation)</p>
                            </Box>
                        </BlockWrapper>
                    </Flex>
                    <Arrow>
                        <ArrowTop isActive={activeBox >= 5}/>
                        <ArrowMiddle isActive={activeBox >= 5}/>
                        <ArrowBot isActive={activeBox >= 5}/>
                    </Arrow>
                    <Flex>
                        <BlockWrapper>
                            <TextUp isActive={activeBox >= 6}>
                                Assessment of the quality of the model
                            </TextUp>
                            <Box isActive={activeBox >= 6}>
                                <p>Evaluation (Model)</p>
                            </Box>
                        </BlockWrapper>
                    </Flex>
                </Half>
            }
            <GradientBot/>
        </Wrapper>
    );
};

export default About;
const Title = styled.h2`
  font-size: 40px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`
const Gradient = styled.div`
  height: 85px;
  width: 100%;
  background: linear-gradient(to bottom, black, rgb(20, 20, 20));
  position: absolute;
  left: 0;
  z-index: -1;
`
const GradientBot = styled.div`
  height: 85px;
  width: 100%;
  background: linear-gradient(to bottom, rgb(20, 20, 20), black );
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`
const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 70px 120px;
  height: fit-content;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 30px 40px;
  }
`
const BlockWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding-left: 30px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`
const TextUp = styled.span`
    transition: all 1s ease;
    color: ${({ isActive }) => isActive ? 'rgba(255,255,255,0.6)' : 'gray'};
    width: 90%;
    margin: 0 auto;
    text-align: center;
`
const TextLeft = styled.span`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    transition: all 1s ease;
    color: ${({ isActive }) => isActive ? 'rgba(255,255,255,0.9)' : 'gray'};
`
const Half = styled.div`
  p, li {
    color:rgb(229, 229, 229);
  }
  width: 50%;
  line-height: 30px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 120px;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 30px;
    p , li{
      font-size: 16px;
    }
  }
`
export const Flex = styled.div`
  display: flex;
  gap: 30px;
  max-height: fit-content;
`
const HalfBlock = styled.div`
    width: 50%;
    text-align: center;
    display: flex;
`
const fillBorderAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scaleY(0);
    border-color: rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgba(0,0,0,0) rgba(255,255,255,0.9);
  }
  50% {
    transform: translate(-50%, -50%) scaleY(1);
    border-color: rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgba(0,0,0,0) rgba(255,255,255,0.9);
    -webkit-box-shadow: 1px 0px 28px -10px rgba(0, 221, 255, 0.6) inset;
    -moz-box-shadow: 1px 0px 28px -10px rgba(0, 221, 255, 0.6) inset;
    box-shadow: 1px 0px 28px -10px rgba(0, 221, 255, 0.6) inset;
  }
  100% {
    transform: translate(-50%, -50%) scaleY(1);
    border-color: rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgba(255,255,255,0.9);
    -webkit-box-shadow: 1px 0px 28px -10px rgba(0, 221, 255, 0.85) inset;
    -moz-box-shadow: 1px 0px 28px -10px rgba(0, 221, 255, 0.85) inset;
    box-shadow: 1px 0px 28px -10px rgba(0, 221, 255, 0.85) inset;
  }
`;
const fillArrowAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scaleY(0);
    border-color: rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgb(20,20,20) rgba(255,255,255,0.9);
  }
  50% {
    transform: translate(-50%, -50%) scaleY(1);
    border-color: rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgb(20,20,20) rgba(255,255,255,0.9);
  }
  100% {
    transform: translate(-50%, -50%) scaleY(1);
    border-color: rgba(255,255,255,0.9) rgba(255,255,255,0.9) rgb(20,20,20) rgba(255,255,255,0.9);
  }
`;
const arrowBotAnimation = keyframes`
  0% {
    border-width: 3px;
    border-color: transparent gray gray transparent;
  }
  100% {
    border-width: 3px;
    border-color: transparent rgba(255,255,255,0.9) rgba(255,255,255,0.9) transparent;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 50%; 
      top: 0;
      left:0;
      z-index: -1;
    }
  
  }
`;
const Box = styled.div`
  p {
    font-weight: 600;
    transition: all 2s ease;
    color: ${({ isActive }) => isActive ? 'rgba(0,255,255,0.7)' : 'gray'};
  }
  font-size: 20px;
  height: 100%;
  width: 100%;
  padding: 10px 0;
  gap:10px;
  position: relative;
  border: 2px solid gray;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  &::before {
    content: '';
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 3px solid transparent; /* Изначально прозрачный бордер */
    animation: ${({ isActive }) => isActive ? css`${fillBorderAnimation} 1s forwards` : 'none'};
    transform: translate(-50%, -50%) scaleY(0);
    transform-origin: top;
  }
`
const arrowMiddleAnimation = keyframes`
  from {
    width: 45px;
    margin-top: -2px;
    background: gray;
    height: 2px;
  }
  to {
    width: 49px;
    margin-top: -3px;
    background: rgba(255,255,255,0.9);
    height: 3px;
  }
`;
const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ArrowTop = styled.div`
  width: 20px;
  height: 30px;
  
  border-style: solid;
  border-width: 2px;
  border-bottom-width: 3px;
  border-color: gray gray rgb(20,20,20) gray;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  &::before {
    content: '';
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 3px solid gray;
    animation: ${({ isActive }) => isActive ? css`${fillArrowAnimation} 0.5s forwards` : 'none'};
    transform: translate(-50%, -50%) scaleY(0);
    transform-origin: top;
  }
`
const ArrowMiddle = styled.div`
  width: 45px;
  margin-top: -2px;
  background: gray;
  height: 2px;
  border-radius: 10px;
  animation: ${({ isActive }) => isActive ? css`${arrowMiddleAnimation} 0.5s forwards` : 'none'};
`
const ArrowBot = styled.div`
  width: 30px;
  height: 30px;
  border-width: 2px;
  border-color: rgb(20,20,20) gray gray rgb(20,20,20);
  border-radius: 4px;
  transform: rotate(45deg);
  margin-top: -18px;
  position: relative;
  z-index: 999;
  &::before {
    content: '';
    border-radius: 4px;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-color: transparent gray gray transparent;
    margin-top: -16px;
    margin-left: -1px;
    z-index: 999;
    animation: ${({ isActive }) => isActive ? css`${arrowBotAnimation} 0.5s forwards` : 'none'};
  }
  
`
