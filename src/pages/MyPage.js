import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar';
import { postLogin } from '../apis/productlists';
import { BsFillChatFill } from 'react-icons/bs';

const MyPage = () => {
    const [isSuccessed, setIsSuccessed] = useState(false);
    const [completeLogin, setCompleteLogin] = useState(false);

    // useEffect(()=>{
    //     setCompleteLogin(true);
    // }, [isSuccessed]);

    async function postLoginData() {
        window.open('http://43.201.186.201:3000/auth/kakao');
        console.log('');
        // window.onbeforeunload = function(){
        //     setIsSuccessed(true);;
        // }
        // fetch('http://43.201.186.201:3000/auth/kakao/callback')
        // .then(res => res.json())
        // .then(res => {
        //     if(res.isSuccess) {
        //         setIsSuccessed(true);
        //     }
        // })
    };

    return(
        <Dom>
            <NavBar />
            <Article>
                <>
                {
                    !(isSuccessed) ?
                    <>
                    <h1>로그인하기</h1>
                    <a href='http://43.201.186.201:3000/auth/kakao'>
                        <BsFillChatFill />카카오로 로그인
                    </a>
                    </> 
                    :
                    <>
                    <h1>로그인 되었습니다!</h1>
                    </>
                }
                </>
            </Article>
        </Dom>
    );
};

export default MyPage;

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

const Button = styled.button`
    background: #A1E0F3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 10px 10px;
    border: 0;
    outline: 0;
    border-radius: 10px;
`;