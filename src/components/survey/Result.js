import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getSurveyResult } from '../../apis/productlists';

const Result = ({responseData}) => {
    const [resultData, setResultData] = useState();
    const [targetResultValue, setTargetResultValue] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData() {
            const response = await getSurveyResult(responseData);
            setResultData(response.data.result);
            console.log('useEffect 요청 실행');
        };
        if(responseData.length === 4) {
            console.log("fetch data");
            fetchData();
        };
        console.log(responseData.length);
    }, [responseData]);

    useEffect(()=>{
        targetResultValue&&
        navigate(`/products/${targetResultValue}`, {
            state: {
              key: `${targetResultValue}`
            }
          });
    }, [targetResultValue])

    const goDetailPage = (e) => {
        // console.log(detailDataInfo);
        const str = (e.target.id).substr(4);
        console.log(str);
        setTargetResultValue(str);
    };

    return (
        <>
            {
                resultData &&
                <>
                <ContentWrapper>
                    <h2>사진을 누르면 해당 상세페이지로 이동합니다.</h2>
                    <img 
                    id={`main${resultData.ProductID}`}
                    src={`/img/productImg/${resultData.ImageURL}`} 
                    alt={`${resultData.Name}향수 추천 사진`} 
                    onClick={goDetailPage}/>
                    <ProductDescription>
                        <h3>{resultData.Brand}</h3>
                        <h1>{resultData.Name}</h1>
                        <h2>{resultData.Price}</h2>
                        <h3>{`Top Note : ${resultData.Top}`}</h3>
                        <h3>{`Middle Note : ${resultData.Middle}`}</h3>
                        <h3>{`Base Note : ${resultData.Base}`}</h3>
                    </ProductDescription>
                    <h2>추천 향수 Top3</h2>
                    <RecommentWrapper>
                        <RecommendBox id={`Rec-${resultData.Rec1}`} onClick={goDetailPage}>
                            <img id={`Rec-${resultData.Rec1}`} src={`/img/productImg/${resultData.Rec1_ImageURL}`} alt="제품 사진" />
                            <div id={`Rec-${resultData.Rec1}`}>{resultData.Rec1_Name}</div>
                        </RecommendBox>
                        <RecommendBox id={`Rec-${resultData.Rec2}`} onClick={goDetailPage}>
                            <img id={`Rec-${resultData.Rec2}`} src={`/img/productImg/${resultData.Rec2_ImageURL}`} alt="제품 사진" />
                            <div id={`Rec-${resultData.Rec2}`}>{resultData.Rec2_Name}</div>
                        </RecommendBox>
                        <RecommendBox id={`Rec-${resultData.Rec3}`} onClick={goDetailPage}>
                            <img id={`Rec-${resultData.Rec3}`} src={`/img/productImg/${resultData.Rec3_ImageURL}`} alt="제품 사진" />
                            <div id={`Rec-${resultData.Rec3}`}>{resultData.Rec3_Name}</div>
                        </RecommendBox>
                    </RecommentWrapper>
                </ContentWrapper>
                </>
            }
            
        </>
    );
};

export default Result;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    align-items: center;
    margin-top: 30px;
    margin-left: 30px;
    img{
        width: 50%;
        cursor: pointer;
    }
    h2{
        margin-top: 20px;
    }
`;

const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,h2,h3{
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const RecommentWrapper = styled.div`
    display: flex;
    /* flex-basis: 50%; */
    width: 80%;
    height: 50%;
    justify-content: center;
    /* overflow-x: scroll; */
`

const RecommendBox = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    img{
        width: 80%;
    }
`