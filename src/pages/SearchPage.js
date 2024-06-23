import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar';
import { FaSearch } from 'react-icons/fa';
import { getSearchResult } from '../apis/productlists';
import ProductItemBox from '../components/product/ProductItemBox';

const SearchPage = () => {
    const [searchKeyword, setSearchKeyword] = useState();
    const [isKeyword, setIsKeyword] = useState();
    const [searchResult, setSearchResult] = useState();

    useEffect(()=> {
        async function fetchData() {
            const response = await getSearchResult(searchKeyword);
            setSearchResult(response.data.result);
            console.log('useEffect 요청 실행');
        };
        fetchData();
    }, [isKeyword]);

    const onChangeAccount = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handlingClickBtn = () => {
        setIsKeyword(true);
    };

    return(
        <Dom>
            <NavBar />
            <Article>
                <Form>
                    <input placeholder='검색어 입력' onChange={onChangeAccount} /><FaSearch onClick={handlingClickBtn} />
                </Form>
                <Wrapper>
                {
                    searchResult && 
                    <>
                        {searchResult&&searchResult.map((product, i) => <ProductItemBox key={i} product={product} />)}
                    </>
                }
                </Wrapper>
            </Article>
        </Dom>
    );
};

export default SearchPage;

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
    justify-content: center;
    width: 75%;
    height: 100%;
    background-color: white;
    border-radius: 20px;
    border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px;
`;

const Form = styled.form`
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    input{
        font-family: 'KCC-eunyoung';
        font-size: 20px;
        display:flex;
        width: 70%;
        border: 0px;
        border-bottom: 1px solid black;
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 60%;
    flex-wrap : wrap;
    overflow-y: scroll;
    align-content: flex-start;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    margin-left: 30px;
`;