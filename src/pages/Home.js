import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar.js';

export default function Home(){
    return(
        <Dom>
            <NavBar />
            <Article>
                <img src={'/img/메인로고.png'} alt="배너"/>
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

const Article = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 100%;
    background-color: #A1E0F3;
    border-radius: 20px;
    border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px;
    img{
        width: 60%;
    }
`;