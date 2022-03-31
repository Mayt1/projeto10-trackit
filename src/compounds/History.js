import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import miniLogo from './../assets/images/TrackIt.svg';

import { StyleSheetConsumer } from "styled-components";

export default function History({ token, image }) {

    return (
        <>
            <Head>
                <MiniLogo src={miniLogo} alt="logo-trackit"></MiniLogo>
                <UserLogo src={image} alt="logo-user"></UserLogo>
            </Head>
            <Container>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Foot>
                    <BottomFoot><Link to="/habitos"> <p>Hábitos</p> </Link> </BottomFoot>
                    <BottomCenter><Link to="/hoje"> <p>Hoje</p> </Link></BottomCenter>
                    <BottomFoot><Link to="/historico"> <p>Histórico</p> </Link> </BottomFoot>
            </Foot>
        </>

    );
}
//<BottomCircular><Link to="/habitos"> <p>Não tem uma conta? Cadastre-se!</p> </Link> </BottomCircular>
const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:70px;

    h1{    
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-top:28px;
        margin-left:18px;
        margin-bottom10px;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-left:15px;
    }
    
`;

const Head = styled.div`
    height:70px;
    width:100%;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`

const MiniLogo = styled.img`
    width:97px;
    height:49px;
    margin-top:10px;
    margin-left:18px;
`;

const UserLogo = styled.img`
    width:51px;
    height:51px;
    margin-top:9px;
    margin-right:18px;
    border-radius:100%;
`;

const Foot = styled.div`
    height:70px;
    width:100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position:fixed;
    bottom:0;
    left:0;
    z-index:10;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;

`
const BottomFoot = styled.button`
    height:70px;
    width:50%;
    border:none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
`

const BottomCenter = styled.button`
    height:91px;
    width:91px;
    border:none;
    border-radius:100%;
    background-color: #52B6FF;
    position:fixed;
    bottom:10px;
    z-index:11;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22.47px;
        z-index:12;
        color:#ffffff;
    }
`

