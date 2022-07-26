import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import logo from './../../assets/images/logo_ifb.png';
import { StyleSheetConsumer } from "styled-components";

export default function CreateUser(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    const [cpf, setCpf] = useState("");
    // const [isTeacher, setIsTeacher] = useState(false);

    const navigate = useNavigate();

    function createNewAccount(){
        const URL = "http://localhost:5000/signup";//a rota de cadastro
        const promise = axios.post(URL, {
            email:email,
            name:name,
            cpf:cpf,
            userPhoto: userPhoto,
            password: password,
            confirmPassword:confirmPassword,
            // isTeacher:isTeacher        
        });
        promise.then(response =>{
            const {data}= response;
            console.log(data);
            navigate("/");
        });
        promise.catch(err => 
            alert(`Digite Todos os campos`)    
        );
    }
    //TODO: adicionar nos inputs  disabled="disabled" ou disabled="" com "disabled" sendo um estado q vai mudando de acordo com o login
    return(
        <Container>
            <Logo src={logo} alt="logo-trackit"></Logo>
            <h1>InovaIF</h1>
            <Input type="text" placeholder="Digite seu cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}></Input>
            <Input type="text" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="Digite uma senha" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Input type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Input>
            <Input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
            <Input type="url" placeholder="Adicione um URL da sua foto" value={userPhoto} onChange={(e) => setUserPhoto(e.target.value)}></Input>
            {/* <label>
                <p>"Voce é profesor?"</p>
            </label>
            <Input type="checkbox" value={isTeacher} checked={isTeacher} onChange={() => setIsTeacher(!isTeacher)}></Input> */}
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
    margin-bottom:40px;
`
