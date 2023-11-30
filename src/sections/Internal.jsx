import React from 'react';
import styled from "styled-components";
import Recommendation from "../Diagrams/Recommendation";
import Trainig from "../Diagrams/Trainig";

const Internal = () => {


    return (
        <Wrapper>
                <Line/>
                <Title>Internal components</Title>
                <SubTitle>
                    <span> RecommendationEngine:</span> generates recommendations based on user data and dataset characteristics
                </SubTitle>
                <Recommendation/>
                <SubTitle>
                    <span> Training:</span> training of models proposed by the system
                </SubTitle>
                <Trainig/>
                <SubTitle>
                    <span> Evaluation:</span> evaluation of the quality of training models
                </SubTitle>
                <LineBot/>
                <BotText>Installation</BotText>
        </Wrapper>
    );
};

export default Internal;
const BotText = styled.h2`
    font-size: 40px;
    padding: 15px 40px;
    margin: -45px auto;
  background: black;
  @media (max-width: 768px) {
    font-size: 22px;
    padding: 9px 20px;
    margin: -24px auto;
    background: black;
  }
  

`
const LineBot = styled.div`
  height: 40px;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  width: 100%;
  background-image: linear-gradient(to bottom, black, #171717);
  margin-top: 40px;
`

const Line = styled.div`
  height: 40px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  width: 100%;
  background-image: linear-gradient(to bottom,#171717, black);
`
const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`
const SubTitle = styled.h2`
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
  font-weight: 300;
  color: rgb(229, 229, 229);
  span {
    font-weight: 400;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Wrapper = styled.div`
  padding: 30px 70px 80px;
  background: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 30px 40px;
  }
`
