import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: transparent;
    display: flex;
    flex-direction : column;
    width: 99%;
    height: 20%;
    border-bottom: solid #A1E0F3 3px;

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 0%;
    }

    h3{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default function SurInfoTemplete() {
    return(
        <Wrapper>
            <h2>나만의 향수 찾기</h2>
            <h3>테스트를 따라 취향에 맞는 향수를 찾아보세요!</h3>
        </Wrapper>
    );
}