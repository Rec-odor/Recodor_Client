import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import NavBar from '../components/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProductDetails, sendingLiked, sendingDeleteLiked } from '../apis/productlists';
import { BsHeart, BsFillSuitHeartFill } from 'react-icons/bs';

const DetailPage = () => {
    const location = useLocation();
    const dataInfo = { ...location.state };
    //console.log(dataInfo.key);
    const productID = dataInfo.key;

    const [detailDataInfo, setDetailDataInfo] = useState();
    const [heartClicked, setHeartClicked] = useState(false);
    const [targetValue, setTargetValue] = useState(productID);
    const [wishItemList, setWishItemList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
          const response = await getProductDetails(productID);
          setDetailDataInfo(response.data.result);
          console.log('useEffect 요청 실행');
        };
        fetchData();
    }, []);

    useEffect(() => {
        async function postHeart() {
            const response = await sendingLiked(productID);
            console.log(response.data.message);
            if ((response.data.message) === "이미 좋아요한 제품") {
                setHeartClicked(true);
            }
        };
        postHeart();
    }, [heartClicked]);

    useEffect(()=>{
        navigate(`/products/${targetValue}`, {
            state: {
              key: `${targetValue}`
            }
        });
    }, [targetValue]);

    const goAnotherDetailPage = (e) => {
        // console.log(detailDataInfo);
        const str = (e.target.id).substr(6);
        console.log(str);
        setTargetValue(str);
    };

  return (
    <>
    <Wrapper>
        <NavBar />
        <Article>
            <>
            {
                detailDataInfo && 
                <>
                <Products>
                    <img src={`/img/productImg/${detailDataInfo.ImageURL}`} alt="제품 사진" />
                    <ProductDescription>
                        <h3>{detailDataInfo.Brand}</h3>
                        <h1>{detailDataInfo.Name}</h1>
                        <h2>{detailDataInfo.Price}</h2>
                        <p>{detailDataInfo.Description}</p>
                        <h3>{`Top Note : ${detailDataInfo.Top}`}</h3>
                        <h3>{`Middle Note : ${detailDataInfo.Middle}`}</h3>
                        <h3>{`Base Note : ${detailDataInfo.Base}`}</h3>
                        <>
                        {
                            // wishItemList && 
                            <>
                            {
                                !(heartClicked) ? 
                                <BsHeart className='before-liked'
                                onClick={() => setHeartClicked(true)}
                                style={{marginTop : '20px'}} />
                                :
                                <BsFillSuitHeartFill className='after-liked' 
                                onClick={() => setHeartClicked(false)}
                                style={{marginTop : '20px'}} />
                            }
                            </>
                        }
                        </>
                    </ProductDescription>
                </Products>
                <h2 style={{margin:20}}>유사한 향수 추천 Top6</h2>
                <RecommentWrapper>
                    <RecommendBox id={`FRec1-${detailDataInfo.Rec1}`} onClick={goAnotherDetailPage}>
                        <img id={`FRec1-${detailDataInfo.Rec1}`} src={`/img/productImg/${detailDataInfo.Rec1_ImageURL}`} alt="제품 사진" />
                        <div id={`FRec1-${detailDataInfo.Rec1}`}>{detailDataInfo.Rec1_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`FRec2-${detailDataInfo.Rec2}`} onClick={goAnotherDetailPage}>
                        <img id={`FRec2-${detailDataInfo.Rec2}`} src={`/img/productImg/${detailDataInfo.Rec2_ImageURL}`} alt="제품 사진" />
                        <div id={`FRec2-${detailDataInfo.Rec2}`}>{detailDataInfo.Rec2_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`FRec3-${detailDataInfo.Rec3}`} onClick={goAnotherDetailPage}>
                        <img id={`FRec3-${detailDataInfo.Rec3}`} src={`/img/productImg/${detailDataInfo.Rec3_ImageURL}`} alt="제품 사진" />
                        <div id={`FRec3-${detailDataInfo.Rec3}`}>{detailDataInfo.Rec3_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`FRec4-${detailDataInfo.Rec4}`} onClick={goAnotherDetailPage}>
                        <img id={`FRec4-${detailDataInfo.Rec4}`} src={`/img/productImg/${detailDataInfo.Rec4_ImageURL}`} alt="제품 사진" />
                        <div id={`FRec4-${detailDataInfo.Rec4}`}>{detailDataInfo.Rec4_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`FRec5-${detailDataInfo.Rec5}`} onClick={goAnotherDetailPage}>
                        <img id={`FRec5-${detailDataInfo.Rec5}`} src={`/img/productImg/${detailDataInfo.Rec5_ImageURL}`} alt="제품 사진" />
                        <div id={`FRec5-${detailDataInfo.Rec5}`}>{detailDataInfo.Rec5_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`FRec6-${detailDataInfo.Rec6}`} onClick={goAnotherDetailPage}>
                        <img id={`FRec6-${detailDataInfo.Rec6}`} src={`/img/productImg/${detailDataInfo.Rec6_ImageURL}`} alt="제품 사진" />
                        <div id={`FRec6-${detailDataInfo.Rec6}`}>{detailDataInfo.Rec6_Name}</div>
                    </RecommendBox>
                </RecommentWrapper>
                <h2 style={{margin:20}}>첫향이 비슷한 향수 추천 Top6</h2>
                <RecommentWrapper>
                    <RecommendBox id={`TRec1-${detailDataInfo.TopRec1}`} onClick={goAnotherDetailPage}>
                        <img id={`TRec1-${detailDataInfo.TopRec1}`} src={`/img/productImg/${detailDataInfo.TopRec1_ImageURL}`} alt="제품 사진" />
                        <div id={`TRec1-${detailDataInfo.TopRec1}`}>{detailDataInfo.TopRec1_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`TRec2-${detailDataInfo.TopRec2}`} onClick={goAnotherDetailPage}>
                        <img id={`TRec2-${detailDataInfo.TopRec2}`} src={`/img/productImg/${detailDataInfo.TopRec2_ImageURL}`} alt="제품 사진" />
                        <div id={`TRec2-${detailDataInfo.TopRec2}`}>{detailDataInfo.TopRec2_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`TRec3-${detailDataInfo.TopRec3}`} onClick={goAnotherDetailPage}>
                        <img id={`TRec3-${detailDataInfo.TopRec3}`} src={`/img/productImg/${detailDataInfo.TopRec3_ImageURL}`} alt="제품 사진" />
                        <div id={`TRec3-${detailDataInfo.TopRec3}`}>{detailDataInfo.TopRec3_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`TRec4-${detailDataInfo.TopRec4}`} onClick={goAnotherDetailPage}>
                        <img id={`TRec4-${detailDataInfo.TopRec4}`} src={`/img/productImg/${detailDataInfo.TopRec4_ImageURL}`} alt="제품 사진" />
                        <div id={`TRec4-${detailDataInfo.TopRec4}`}>{detailDataInfo.TopRec4_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`TRec5-${detailDataInfo.TopRec5}`} onClick={goAnotherDetailPage}>
                        <img id={`TRec5-${detailDataInfo.TopRec5}`} src={`/img/productImg/${detailDataInfo.TopRec5_ImageURL}`} alt="제품 사진" />
                        <div id={`TRec5-${detailDataInfo.TopRec5}`}>{detailDataInfo.TopRec5_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`TRec6-${detailDataInfo.TopRec6}`} onClick={goAnotherDetailPage}>
                        <img id={`TRec6-${detailDataInfo.TopRec6}`} src={`/img/productImg/${detailDataInfo.TopRec6_ImageURL}`} alt="제품 사진" />
                        <div id={`TRec6-${detailDataInfo.TopRec6}`}>{detailDataInfo.TopRec6_Name}</div>
                    </RecommendBox>
                </RecommentWrapper>
                <h2 style={{margin:20}}>잔향이 비슷한 향수 추천 Top6</h2>
                <RecommentWrapper>
                    <RecommendBox id={`BRec1-${detailDataInfo.BaseRec1}`} onClick={goAnotherDetailPage}>
                        <img id={`BRec1-${detailDataInfo.BaseRec1}`} src={`/img/productImg/${detailDataInfo.BaseRec1_ImageURL}`} alt="제품 사진" />
                        <div id={`BRec1-${detailDataInfo.BaseRec1}`}>{detailDataInfo.BaseRec1_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`BRec2-${detailDataInfo.BaseRec2}`} onClick={goAnotherDetailPage}>
                        <img id={`BRec2-${detailDataInfo.BaseRec2}`} src={`/img/productImg/${detailDataInfo.BaseRec2_ImageURL}`} alt="제품 사진" />
                        <div id={`BRec2-${detailDataInfo.BaseRec2}`}>{detailDataInfo.BaseRec2_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`BRec3-${detailDataInfo.BaseRec3}`} onClick={goAnotherDetailPage}>
                        <img id={`BRec3-${detailDataInfo.BaseRec3}`} src={`/img/productImg/${detailDataInfo.BaseRec3_ImageURL}`} alt="제품 사진" />
                        <div id={`BRec3-${detailDataInfo.BaseRec3}`}>{detailDataInfo.BaseRec3_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`BRec4-${detailDataInfo.BaseRec4}`} onClick={goAnotherDetailPage}>
                        <img id={`BRec4-${detailDataInfo.BaseRec4}`} src={`/img/productImg/${detailDataInfo.BaseRec4_ImageURL}`} alt="제품 사진" />
                        <div id={`BRec4-${detailDataInfo.BaseRec4}`}>{detailDataInfo.BaseRec4_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`BRec5-${detailDataInfo.BaseRec5}`} onClick={goAnotherDetailPage}>
                        <img id={`BRec5-${detailDataInfo.BaseRec5}`} src={`/img/productImg/${detailDataInfo.BaseRec5_ImageURL}`} alt="제품 사진" />
                        <div id={`BRec5-${detailDataInfo.BaseRec5}`}>{detailDataInfo.BaseRec5_Name}</div>
                    </RecommendBox>
                    <RecommendBox id={`BRec6-${detailDataInfo.BaseRec6}`} onClick={goAnotherDetailPage}>
                        <img id={`BRec6-${detailDataInfo.BaseRec6}`} src={`/img/productImg/${detailDataInfo.BaseRec6_ImageURL}`} alt="제품 사진" />
                        <div id={`BRec6-${detailDataInfo.BaseRec6}`}>{detailDataInfo.BaseRec6_Name}</div>
                    </RecommendBox>
                </RecommentWrapper>
                </>
            }
            </>
        </Article>
    </Wrapper>
    </>
  )
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
    overflow-y: scroll;
    background-color: white;
    border-radius: 20px;
    border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px;
`;

const Products = styled.div`
    display: flex;
    width: 80%;
    height: 60%;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
    align-items: center;
    img{
        width: 50%;
    }
`

const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    h2{
        margin-bottom: 0px;
    }
    h1,h3{
        margin-top: 0px;
        margin-bottom: 0px;
    }
`

const RecommentWrapper = styled.div`
    display: flex;
    /* flex-basis: 50%; */
    width: 80%;
    height: 50%;
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

export default DetailPage