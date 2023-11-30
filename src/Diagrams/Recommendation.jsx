import React, {useEffect, useRef, useState} from 'react';
import styled, {css, keyframes} from "styled-components";
const Recommendation = () => {
    const [activeBox, setActiveBox] = useState(-1);
    const elementRef = useRef(null);

    const checkVisibility = () => {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = rect.top <= 400;
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
        <Wrapper ref={elementRef}>
            <Flex>
                <SubTitle>Recommendation system algorithm</SubTitle>
                <Half>
                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 0}>
                            Input parameters
                        </TextUp>
                        <Box isActive={activeBox >= 0}>
                            <p>Image data and user parameters</p>
                        </Box>
                    </Flex>

                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 1}>
                            Data preprocessing
                        </TextUp>
                        <Arrow>
                            <ArrowTop isActive={activeBox >= 1}/>
                            <ArrowMiddle isActive={activeBox >= 1}/>
                            <ArrowBot isActive={activeBox >= 1}/>
                        </Arrow>
                    </Flex>

                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 2}>
                           Finding the optional solutions
                        </TextUp>
                        <Box style={{gap: '0px'}} isActive={activeBox >= 2}>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <p>Knowledge <br/> base</p>
                                <p>Array of <br/> parameters</p>
                            </div>
                            <div style={{display: 'flex', position: "relative",width: '100%', height: '80px'}}>
                                <DiagonalRight isActive={activeBox >= 2}/>
                            </div>
                            <p>KNN algorithm</p>
                        </Box>
                    </Flex>
                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 3}>
                            Forming a solution
                        </TextUp>
                        <Arrow>
                            <ArrowTop isActive={activeBox >= 3}/>
                            <ArrowMiddle isActive={activeBox >= 3}/>
                            <ArrowBot isActive={activeBox >= 3}/>
                        </Arrow>
                    </Flex>
                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 4}>
                            Output parameters
                        </TextUp>
                        <Box isActive={activeBox >= 4}>
                            <p>Best model and recommendation lists</p>
                        </Box>
                    </Flex>
                </Half>
                <SubTitle style={{marginTop: '20px'}}>Example of usage</SubTitle>
                <Half>
                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 5}>
                            if
                        </TextUp>
                        <Box style={{gap: '15px', alignItems: 'start', textAlign: 'left'}} isActive={activeBox >= 5}>
                            <p>Balance of speed and accuracy</p>
                            <p>GRU interface</p>
                            <p>Image size: 1920x1080</p>
                            <p>Unbalanced dataset</p>
                            <p>Count of images: 2200</p>
                        </Box>
                    </Flex>
                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 6}>
                            Recommendation process
                        </TextUp>
                        <Arrow>
                            <ArrowTop isActive={activeBox >= 6}/>
                            <ArrowMiddle isActive={activeBox >= 6}/>
                            <ArrowBot isActive={activeBox >= 6}/>
                        </Arrow>
                    </Flex>
                    <Flex style={{gap: '10px'}}>
                        <TextUp isActive={activeBox >= 7}>
                            then
                        </TextUp>
                        <Box style={{gap: '15px'}} isActive={activeBox >= 7}>
                            <p>Yolov5x</p>
                            <p>Yolov7x</p>
                            <p>Yolov5l</p>
                        </Box>
                    </Flex>
                </Half>
                <Half>
                    <Text>
                        The recommendation algorithm is based on production rules. The primary set of rules (knowledge base) is formed on the basis of the results of the analysis of scientific sources and standard data sets, but also empirical processing of data sets from specific industries. The main criteria for drawing up the rules were chosen:
                        <br/><br/>
                        1. Dimension of the model
                        <br/>
                        2. The value of metrics (mAP, Recall, Accuracy) for selected datasets
                        <br/>
                        3. The speed of the model on GPU and CPU
                        <br/>
                        4. Supported image format and dimension
                    </Text>
                </Half>
            </Flex>
        </Wrapper>
    );
};

export default Recommendation;

const DiagonalRight = styled.div`
  width: 90px;
  height: 90px;
  transform: rotate(-45deg);
  position: absolute;
  top: -35px;
  left: calc(50% - 50px);
  transition: all 1s ease;
  border-bottom: ${({ isActive }) => isActive ? '2px solid rgba(255,255,255,0.8)' : ' 2px solid gray'};
  border-left: ${({ isActive }) => isActive ? '2px solid rgba(255,255,255,0.8)' : ' 2px solid gray'};
  
`
const SubTitle = styled.h2`
  font-size: 25px;
  text-align: center;
  font-weight: 300;
  color: rgb(229, 229, 229);
  span {
    font-weight: 400;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const TextUp = styled.span`
    transition: all 1s ease;
    color: ${({ isActive }) => isActive ? 'rgba(255,255,255,0.6)' : 'gray'};
    width: 90%;
    margin: 0 auto;
    text-align: center;
`
const Flex = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`
const Text = styled.p`
    font-size: 18px;
    line-height: 30px;
    padding: 0 10%;
    color: rgb(229, 229, 229);
    width: 90%;
  @media (max-width: 768px) {
    padding: 0;
    font-size: 16px;
  }
`
const Half = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Wrapper = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 25px 0 0;
  }
`
const Box = styled.div`
  width: 300px;
  min-height: 150px;
  p {
    font-weight: 600;
    transition: all 2s ease;
    color: ${({ isActive }) => isActive ? 'rgba(0,255,255,0.7)' : 'gray'};
  }
  font-size: 20px;
  padding: 15px 15px;
  gap:30px;
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
const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-90deg);
  @media (max-width: 768px) {
    transform: rotate(0deg);
  }
`
const ArrowTop = styled.div`
  width: 20px;
  height: 30px;

  border-style: solid;
  border-width: 2px;
  border-bottom-width: 3px;
  border-color: gray gray rgb(0, 0, 0) gray;
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
    animation: ${({isActive}) => isActive ? css`${fillArrowAnimation} 1s forwards` : 'none'};
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
  border-color: rgb(0, 0, 0) gray gray rgb(0, 0, 0);
  border-radius: 4px;
  transform: rotate(45deg);
  margin-top: -18px;
  position: relative;
  z-index: 999;
  border-bottom-width: 3px;
  &::before {
    content: '';
    border-radius: 4px;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-color: transparent gray gray transparent;
    border-bottom-width: 3px;
    margin-top: -16px;
    margin-left: -1px;
    z-index: 999;
    animation: ${({isActive}) => isActive ? css`${arrowBotAnimation} 0.5s forwards` : 'none'};
  }

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
    -webkit-box-shadow: 1px 0px 40px -10px rgba(0, 221, 255, 0.85) inset;
    -moz-box-shadow: 1px 0px 40px -5px rgba(0, 221, 255, 0.85) inset;
    box-shadow: 1px 0px 40px -5px rgba(0, 221, 255, 0.85) inset;
  }
`;
const fillArrowAnimation = keyframes`
  0% {
    
    transform: translate(-50%, -50%) scaleY(0);
    border-color: rgba(255, 255, 255, 0.9) rgba(255, 255, 255, 0.9) rgb(0, 0, 0) rgba(255, 255, 255, 0.9);
  }
  50% {
    
    transform: translate(-50%, -50%) scaleY(1);
    border-color: rgba(255, 255, 255, 0.9) rgba(255, 255, 255, 0.9) rgb(0, 0, 0) rgba(255, 255, 255, 0.9);
  }
  100% {
    border-bottom-width: 4px;
    transform: translate(-50%, -50%) scaleY(1);
    border-color: rgba(255, 255, 255, 0.9) rgba(255, 255, 255, 0.9) rgb(0, 0, 0) rgba(255, 255, 255, 0.9);
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