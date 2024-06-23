import React, { useState,useEffect } from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar';
import ProductItemBox from '../components/product/ProductItemBox';
import { getUserWishList } from '../apis/productlists';

const WishList = () => {
    const [userWishData, setUserWishData] = useState();
    useEffect(() => {
        async function fetchData() {
        //   const response = await getUserWishList('2627753420');
          const response = await getUserWishList();
          setUserWishData(response.data.result);
          console.log('useEffect 요청 실행');
        };
        fetchData();
    }, []);

    return(
        <Dom>
            <NavBar />
            <Article>
                <InfoWrapper>
                    <h1>WishList</h1>
                </InfoWrapper>
                <Wrapper>
                    {
                    userWishData &&
                    <>
                    {userWishData&&userWishData.map((product, i) => <ProductItemBox key={i} product={product} />)}
                    </>
                    }
                </Wrapper>
            </Article>
        </Dom>
    );
};

export default WishList;

const Dom = styled.div`
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

const InfoWrapper = styled.div`
    background: transparent;
    display: flex;
    align-items: center;
    width: 80%;
    height: 15%;
    /* border-radius: 20px; */
    border-bottom: solid #A1E0F3 3px;
    /* border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px; */

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 10px 10px 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    height: 70%;
    flex-wrap : wrap;
    overflow-y: scroll;
    align-content: flex-start;
    /* justify-content: center; */
    margin-top: 30px;
    margin-left: 30px;
`;