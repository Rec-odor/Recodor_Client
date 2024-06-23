import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import questionData from './SurveyQuestion.json';
import Result from './Result';

export default function SurveyBasic({responseData,setResponseData}) { 
    const [questionPage, setQuestionPage] = useState(0);
    const [btnActive, setBtnActive] = useState();
    const [btnIdValue, setBtnIdValue] = useState();

    useEffect(() => {
        if(!(btnActive===undefined)) {setResponseData(`${responseData}`+`${btnIdValue}`)};
        console.log(responseData);
    }, [btnActive]);

    const toggleActive = (e) => {
        // console.log(e.target.id);
        const str = (e.target.id).substr(2);
        console.log(str);
        setBtnIdValue(str);
        setBtnActive(questionPage);
        // console.log(btnActive);
        setQuestionPage(questionPage+1);
    }
    // const btnHandling = () => {
    //     // setResponseData(responseData+btnActive);
    //     // setResponseData(responseData => [...responseData,`${e.target.id}`]);
    //     setQuestionPage(questionPage+1);
    //     // console.log(responseData);
    // }
    
    return(
        <>
        <Wrapper>
            {
                ((questionData.length)) === questionPage ?
                <Result responseData={responseData} />
                :
                <>
                <h3>{questionData[questionPage].questionText}</h3>
                <ButtonWrapper>
                    {(questionData[questionPage].answerType==="img")? 
                    questionData[questionPage].answers && questionData[questionPage].answers.map((answer, i) => (
                        <ImgButton 
                        id={`${questionPage}-${answer.answerId}`} 
                        alt={answer.answerImgAlt} 
                        src={answer.answerImg} 
                        onClick={toggleActive} />
                    ))
                    :
                    questionData[questionPage].answers && questionData[questionPage].answers.map((answer, i) => (
                        <Button id={`${questionPage}-${answer.answerId}`} onClick={toggleActive}>{answer.answerText}</Button>
                    ))}
                </ButtonWrapper>
                </>
            }
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75%;
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

const ImgButton = styled.img`
    /* background: white; */
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    width: 40%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    gap: 10px;
    justify-content: center;
    align-content: center;
`;