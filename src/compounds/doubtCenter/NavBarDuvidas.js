import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
//import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useContext } from 'react';

import NavBarDuvidasContext from "../../providers/NavBarDuvidasContext";

import { StyleSheetConsumer } from "styled-components";

export default function NavBarDuvidas(props) {

    //const { sideBar, setSideBar } = useContext(NavBarDuvidasContext);

    return (
        <NavBarDuvida>
            <Link to="/CDConversas">
                <Conversas>
                    <p>Conversas</p>
                    <div></div>
                </Conversas>
            </Link>
            <Link to="/CDDuvidas">
                <MinhasDuvidas>
                    <p>Dúvidas</p>
                    <div></div>
                </MinhasDuvidas>
            </Link>
            <Link to="/CDAjude">
                <Ajude>
                    <p>Ajude</p>
                    <div></div>
                </Ajude>
            </Link>
        </NavBarDuvida>
    );
}

const NavBarDuvida = styled.div`
    margin-top:70px;
    display:flex;
    flex-direction:row;
`;

const Conversas = styled.div`
    width:33.3vw;
    height:60px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #A8A4A4;
    background-color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    left:0px;
    div{
        width:100%;
        height:10px;
        background-color:#A8A4A4;
        z-index:5;
        position:absolute;
        bottom:0px;
    }
    p{
        align-items:center;
        justify-content:center;
    }
`;
const Ajude = styled.div`
    width:33.3vw;
    height:60px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #A8A4A4;
    background-color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    div{
        width:100%;
        height:10px;
        background-color:#A8A4A4;
        z-index:5;
        position:absolute;
        bottom:0px;
    }
`;
const MinhasDuvidas = styled.div`
    width:33.3vw;
    height:60px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #00420C;
    background-color: white;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:relative;
    div{
        width:100%;
        height:10px;
        background-color: #00420C;
        z-index:5;
        position:absolute;
        bottom:0px;
    }
`;