import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { StyleSheetConsumer } from "styled-components";


export default function Footer() {

    return (
        <Foot>
            <BottomFoot><Link to="/oficinas/grupi"> <p>Oficinas</p> </Link> </BottomFoot>
            <BottomCenter><Link to="/homePage"> <p>Home</p> </Link></BottomCenter>
            <BottomFoot><Link to="/tutoria" > <p>Tutoria</p> </Link> </BottomFoot>
        </Foot>
    );
}


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
    color: var(--corprincipal);
`

const BottomCenter = styled.button`
    height:91px;
    width:91px;
    border:none;
    border-radius:100%;
    background-color: var(--corprincipal);
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