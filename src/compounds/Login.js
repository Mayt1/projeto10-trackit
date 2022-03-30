import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import logo from './../assets/images/logo.svg';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Container>
            <Logo src={logo} alt="logo-trackit"></Logo>
            <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button>Entrar</Button>
            <Link to="cadastro/"> <LinkToNewUser>Não tem uma conta? Cadastre-se!</LinkToNewUser> </Link>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width:180px;
    height:180px;
    margin-top:68px;
    margin-bottom:35px;
`;

const Input = styled.input`
    margin-bottom: 6px;
    background-color:#FFFFFF;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    padding-left:11px;
`;

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border:#52B6FF;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`;

const LinkToNewUser = styled.p`
    margin-top: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`