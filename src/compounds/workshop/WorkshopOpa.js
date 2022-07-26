import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyleSheetConsumer } from "styled-components";

import Header from "../basicLayoutShared/Header";
import Footer from "../basicLayoutShared/Footer";
import NavBarOficina from "./NavBarOficinas";

export default function WorkshopOpa() {
    let inscritos = 10;
    let vagas =40;
    let tema = "Organizaçao de eventos"
    let descrição = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let docentes = ["Ana Julia e João Marques"]
    return (
        <>
            <Header />
            <ContainerHead>
                    <NavBarOficina></NavBarOficina>
                    <h1>Selecione as Oficinas</h1>
            </ContainerHead>
            <Container>
                <Oficina>
                    <h1>Inscriçoes {inscritos}/{vagas}</h1>
                    <h2>Tema: {tema}</h2>
                    <h3>Descrição: {descrição}</h3>
                    <div>
                        <p>Docentes: {docentes}</p>
                        <button> Inscrever </button>
                    </div>
                </Oficina>
                <Oficina>
                    <h1>Inscriçoes {inscritos}/{vagas}</h1>
                    <h2>Tema: {tema}</h2>
                    <h2>Descrição: {descrição}</h2>
                    <div>
                        <p>Docentes: {docentes}</p>
                        <button> Inscrever </button>
                    </div>
                </Oficina>
                <Oficina>
                    <h1>Inscriçoes {inscritos}/{vagas}</h1>
                    <h2>Tema: {tema}</h2>
                    <h2>Descrição: {descrição}</h2>
                    <div>
                        <p>Docentes: {docentes}</p>
                        <button> Inscrever </button>
                    </div>
                </Oficina>
            </Container>
            <Space></Space>
            <Footer />
        </>
    );
}
//<BottomCircular><Link to="/habitos"> <p>Não tem uma conta? Cadastre-se!</p> </Link> </BottomCircular>
const Oficina = styled.div`
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
        margin-left:90px;
        margin-top:5px;
        margin-bottom:5px;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        margin-left:5px;
        margin-bottom:5px;
        color: black;
        margin-top:5px;
        margin-left:15px;
        margin-bottom:5px;
    }
    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-left:5px;
        margin-bottom:5px;
        color: black;
        margin-top:5px;
        margin-left:15px;
        margin-bottom:5px;
    }
    div{
        display:flex;
        flex-direction:row;
    }
    div button{
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
    div p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 600;
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
