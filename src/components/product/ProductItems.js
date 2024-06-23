import React from 'react';
import styled from 'styled-components';
import ProductItemBox from './ProductItemBox';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap : wrap;
    overflow-y: scroll;
    align-content: flex-start;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    margin-left: 30px;
`;


export default function ProductItems({productData}){
    return(
        <Wrapper>
            {
                productData && productData.map((product,i) => <ProductItemBox key={i} product={product} />)
            }
        </Wrapper>
    );
}