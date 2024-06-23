import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BsPersonFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
    background: transparent;
    display: flex;
    flex-direction : column;
    width: 20%;
    height: 100%;
    justify-content: space-around;
    border-radius: 20px;
    border-style: solid;
    border-color: #A1E0F3;
    border-width: 5px 0px 5px 5px;
`;

const LogoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30%;
    padding-bottom: 30%;
    
    .imgLink{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        display: flex;
        width: 80%;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    height: 30%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    border: 0;
    outline: 0;
    background: white;
    width: 70%;
    padding: 10px 10px 10px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const PersonalInfo = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;
    align-items: center;
`;

export default function NavBar() {
    return(
        <Wrapper>
            <LogoStyle>
                <Link to = "/" className="imgLink">
                    <img alt="로고 및 메인화면 가기" src="/img/logo_design.png" />
                </Link>
            </LogoStyle>
            <ButtonWrapper>
                <Button><Link to ="/products" style={{textDecoration: "none"}}>Product</Link></Button>
                <Button><Link to="/brand" style={{textDecoration: "none"}}>Brand</Link></Button>
                <Button><Link to="/findfavor" style={{textDecoration: "none"}}>Find Favor</Link></Button>
            </ButtonWrapper>
            <PersonalInfo>
                <Button><Link to="/mypage" style={{textDecoration: "none"}}><BsPersonFill /></Link></Button>
                <Button><Link to="/wishlist" style={{textDecoration: "none"}}><BsFillSuitHeartFill /></Link></Button>
                <Button><Link to="/search" style={{textDecoration: "none"}}><FaSearch /></Link></Button>
            </PersonalInfo>
         </Wrapper>
    );
}