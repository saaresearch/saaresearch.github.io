import React from 'react';
import styled from 'styled-components'

const SectionLine = ({text}) => {
    return (
        <Wrapper>
            <LineBot/>
            <BotText>{text}</BotText>
        </Wrapper>
    );
};

export default SectionLine;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const BotText = styled.h2`
  font-size: 40px;
  padding: 15px 40px 40px;
  background: black;
  width: fit-content;
  margin-top: -80px;
  text-align: center;
  display: flex;

  @media (max-width: 768px) {
    position: absolute;
    font-size: 22px;
    padding: 9px 20px;
    background: black;
    left: 50;
    top: 95px;
  }
`
const LineBot = styled.div`
  height: 40px;
  border-bottom: 1px solid gray;
  width: 100%;
  background-image: linear-gradient(to bottom, black, #171717);
  margin: 40px 0;
  @media (max-width: 768px) {
    height: 1px;
    margin: 40px;
  }
`