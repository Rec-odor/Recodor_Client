import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.js';
import SurInfoTemplete from '../components/survey/SurInfoTemplete.js';
import SurveyBasic from '../components/survey/SurveyBasic.js';
import { useNavigate } from "react-router-dom";

export default function FindFavor(){
    const [responseData, setResponseData] = useState("");
    const [isQuestion, setIsQuestion] = useState(false);
    return(
        <Wrapper>
            <NavBar />
            <Article>
                <SurInfoTemplete />
                {
                    !(isQuestion) ?
                    <ContentWrapper>
                        <h3>나만의 향수 취향 찾기</h3>
                        <p>테스트를 통해 당신의 향수 취향을 찾아보세요!</p>
                        <Button onClick={() => {setIsQuestion(true);}}>시작하기</Button>
                    </ContentWrapper>
                    :
                    <SurveyBasic responseData={responseData} setResponseData={setResponseData} />
                }
            </Article>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 99vw;
    height: 97vh;
    background: white;
`;

const Article = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    gap: 10px;
`;

const Button = styled.button`
    background: #A1E0F3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 10px 10px;
    border: 0;
    outline: 0;
    border-radius: 10px;
`;