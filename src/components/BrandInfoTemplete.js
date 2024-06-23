import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction : column;
    width: 99%;
    height: 20%;

    h1{
        padding-bottom: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ButtonWrapper = styled.div`
    height: 40%;
    width: 98%;
    background: red;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    background: white;
    display: flex;
    flex-basis: 20%;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export default function BrandInfoTemplete() {
    return(
        <Wrapper>
            <h1>Brand</h1>
            <ButtonWrapper>
                <Button>브랜드별 선택지</Button>
            </ButtonWrapper>
         </Wrapper>
    );
}