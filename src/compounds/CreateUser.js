import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import logo from './../assets/images/logo.svg';
import { StyleSheetConsumer } from "styled-components";

export default function CreateUser(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    function createNewAccount(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, {
            email:email,
            name:name,
            image: image,
            password: password,        
        });
        promise.then(response =>{
            const {data}= response;
            console.log(data);
            navigate("/");
        });
        promise.catch(err => 
            alert(`Digite corretamente suas Credenciais`)    
        );
    }

    return(
        <Container>
            <Logo src={logo} alt="logo-trackit"></Logo>
            <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Input type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
            <Input type="url" placeholder="foto" value={image} onChange={(e) => setImage(e.target.value)}></Input>
            <Button onClick={createNewAccount}>Cadastrar</Button>
            <Link to="/"> <LinkToNewUser>Já tem uma conta? Faça login!</LinkToNewUser> </Link>
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
    color: black;
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
