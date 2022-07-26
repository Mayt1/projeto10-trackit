//import { Link, Navigate, useNavigate } from "react-router-dom";
//import axios from 'axios';
//import { useState, useEffect } from 'react';
import styled from 'styled-components'

//import { StyleSheetConsumer } from "styled-components";

import Header from "../basicLayoutShared/Header";
import Footer from "../basicLayoutShared/Footer";
import NavBarTutoria from "./NavBarTutoria";
import { Link } from 'react-router-dom';
import logo from './../../assets/images/imagem.JPG';

export default function Tutoria() {

    let nome = "Alice Watson";
    let email = "alice@email.com";
    let sobre = `Olá! Sou Alice, professora da área técnica em Eventos! Sou tutora desde 2017, e essa é uma das minhas maiores realizações como educadora. Além disso, sou geminiana, mãe de duas flores (Violeta e Elisa) e jornalista. Uma das minhas paixões é viajar, especialmente para conhecer praias novas (meu grande`
    // let formacao = "universidade X no ano de 2001, fez trabalhos como tal tal "
    return (
        <>
            <Header />
            <ContainerHead>
                    {/* <NavBarTutoria></NavBarTutoria> */}
                    <h1>Encontre um Tutor</h1>
            </ContainerHead>
            <Container>
                <Tutor>
                    <div>
                        <UserLogo src={logo} alt="logo-user"></UserLogo>
                        <article>
                            <h1>{nome}</h1>
                            <h2>{email}</h2>
                            {/* <h2>{formacao}</h2> */}
                        </article>
                    </div>
                    <p>{sobre} <strong>...VER MAIS</strong></p>
                    <Infotutor>
                        <button> Inscrever </button>
                        <Divide>
                            <h3> cota 1ª ano EM 0/5</h3>
                            <h3> cota 2ª ano EM 0/5</h3>
                            <h3> cota 3ª ano EM 3/5</h3>
                        </Divide>
                    </Infotutor>
                </Tutor>
            </Container>
            <Space></Space>
            <Footer />
        </>
    );
}
//<BottomCircular><Link to="/habitos"> <p>Não tem uma conta? Cadastre-se!</p> </Link> </BottomCircular>
const Divide = styled.div`
    display:flex;
    flex-direction:column;
`

const Infotutor = styled.div`
    display:flex;
    flex-direction:row;

    button{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        width: 180px;
        height: 50px;
        background: #7089DF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border:none;
        margin:0px 15px 15px 15px;
    }
`

const Tutor = styled.div`
    display:flex;
    flex-direction:column;
    width: 355px;
    height: max-content;
    background: #98D68F;
    border-radius: 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 22.976px;
        line-height: 29px;
        color: black;
        margin-top:5px;
        margin-bottom:5px;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        margin-bottom:5px;
        color: black;
        margin-top:5px;
        margin-bottom:5px;
    }
    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin: 5px 4px 0px 4px
        color: black;
        text-align: center;
    }
    div{
        display:flex;
        flex-direction:row;
    }
    div p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 29px;
        margin:0px 15px 15px 15px;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 29px;
        margin:0px 15px 15px 15px;

    }
    
`;
const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const Space = styled.div`
    width:10px;
    height:10px;
    margin-bottom:90px;
`
const UserLogo = styled.img`
    width:100px;
    height:90px;
    margin: 10px 10px 10px 10px;
    border-radius:100%;
`;
const ContainerHead = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: var(--corprincipal);
    margin-top: 120px;
    margin-bottom:10px;
}
`
