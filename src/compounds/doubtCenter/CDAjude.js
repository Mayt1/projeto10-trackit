import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { StyleSheetConsumer } from "styled-components";


import Header from "./../basicLayoutShared/Header";
import Footer from "../basicLayoutShared/Footer";
import NavBarDuvidas from "./NavBarDuvidas";

export default function CDAjude() {

    return (
        <>
            <Header />
            <NavBarDuvidas />
            <Container>
                <h1>Ajude</h1>
                <p>Em breve você poderá Ajudar aqui!</p>
            </Container>
            <Footer />
        </>

    );
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:5px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: var(--corprincipal);
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


