import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
//import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useContext } from 'react';

//import NavBarDuvidasContext from "../providers/NavBarDuvidasContext";

import { StyleSheetConsumer } from "styled-components";

export default function NavBarTutoria(props) {

    //const { sideBar, setSideBar } = useContext(NavBarDuvidasContext);

    return (
        <NavBarTutorias>
                <TutoresDisponiveis>
                    <p>Disponiveis</p>
                    <div></div>
                </TutoresDisponiveis>
                {/* <TutoresIndisponiveis>
                    <p>Indisponiveis</p>
                    <div></div>
                </TutoresIndisponiveis> */}
                <QuadroDocentes>
                    <p>Todos Docentes</p>
                    <div></div>
                </QuadroDocentes>
        </NavBarTutorias>
    );
}

const NavBarTutorias = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:fixed;
`;

const TutoresDisponiveis = styled.div`
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
        height:5px;
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
const TutoresIndisponiveis = styled.div`
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
        height:5px;
        background-color:#A8A4A4;
        z-index:5;
        position:absolute;
        bottom:0px;
    }
`;
const QuadroDocentes = styled.div`
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
        height:5px;
        background-color: #00420C;
        z-index:5;
        position:absolute;
        bottom:0px;
    }
`;