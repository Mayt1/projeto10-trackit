import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import logo from './../../assets/images/logo_ifb.png';

import App from "../App";

//export default function Login({saveToken},{saveUserImg}){
export default function Login({saveToken,saveUserImg}){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function loginAutentication(){
        const URL = "https://";
        const promise = axios.post(URL, {
            email:email,
            password: password,        
        });
        promise.then(response =>{
            const {data}= response;
            console.log(data);
            saveToken(data.token);
            saveUserImg(data.image);
            navigate("/homePage");
        });
        promise.catch(err => 
            alert(`Digite corretamente suas Credenciais`)    
        );
      
    }
    //TODO: adicionar nos inputs  disabled="disabled" ou disabled="" com disabled sendo um estado q vai mudando de acordo com o login
    return(
        <Container>
            <Logo src={logo} alt="logo-trackit"></Logo>
            <h1>InovaIF</h1>
            <Input type="text" placeholder="CPF" required value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Link to="/homePage"><Button onClick={loginAutentication}>Entrar</Button></Link>
            <Link to="/cadastroUsuario"> <LinkToNewUser>Não tem uma conta? Cadastre-se!</LinkToNewUser> </Link>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    h1{
        color:var( --corLogo);
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 67px;
        font-family: 'Architects Daughter', cursive;
        margin-top:42px;
        margin-bottom:42px;
    }
`;

const Logo = styled.img`
    width: 303px;
    height:94px;
    margin-top:36px;
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
    background: var(--corprincipal);
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
    margin-bottom: 25px;
`;

const LinkToNewUser = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`
