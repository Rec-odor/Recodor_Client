import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

// import ProductInfoTemplete from '../components/product/ProductInfoTemplete.js';
import ProductItems from '../components/product/ProductItems.js';
import NavBar from '../components/NavBar.js';
import FilterButton from '../components/product/FilterButton.js'

export default function ProductList(){
    const [productData, setProductData] = useState([]);
    const category = [
        {
            type: "hits",
            title: "조회수순"
        },
        {
            type: "abc",
            title: "가나다순"
        },
        {
            type: "like",
            title: "인기순"
        },
        {
            type: "highprice",
            title: "가격순"
        },
    ];
    return(
        <Dom>
            <NavBar />
            <Article>
                <Wrapper>
                    <h2>Product List</h2>
                    <ButtonWrapper>
                        {
                            category.map((c,i) => (
                                <FilterButton 
                                key={i}
                                title={c.title}
                                type={c.type}
                                setProductData={setProductData} />
                            ))
                        }
                    </ButtonWrapper>
                </Wrapper>
                <ProductItems productData={productData}/>
            </Article>
        </Dom>
    );
}

const Dom = styled.div`
    display: flex;
    justify-content: center;
    width: 99vw;
    height: 97vh;
    background: white;
`;

const Wrapper = styled.div`
    background: transparent;
    display: flex;
    flex-direction : column;
    width: 80%;
    height: 20%;
    /* border-radius: 20px; */
    border-bottom: solid #A1E0F3 3px;
    /* border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px; */

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
`;

const ButtonWrapper = styled.div`
    height: 20%;
    width: 98%;
    display: flex;
    justify-content: center;
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