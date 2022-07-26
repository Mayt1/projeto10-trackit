import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
//import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useContext } from 'react';

//import NavBarDuvidasContext from "../providers/NavBarDuvidasContext";

import { StyleSheetConsumer } from "styled-components";

export default function NavBarOficina(props) {

    //const { sideBar, setSideBar } = useContext(NavBarDuvidasContext);

    return (
        <NavBarOficinas>
            <StyledGrupi to="/oficinas/grupi">
                <p>GRUPI</p>
                <div></div>
            </StyledGrupi>
            <StyledOpa to="/oficinas/opa">
                <p>OPA</p>
                <div></div>
            </StyledOpa>
        </NavBarOficinas>
    );
}

const StyledGrupi = styled(Link)`
width:50vw;
height:60px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
background-color: white;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
position:relative;
p{
    color: var(--corprincipal);
}
div{
    width:100%;
    height:5px;
    background-color: #00420C;
    z-index:5;
    position:absolute;
    bottom:0px;
}
`;

const StyledOpa = styled(Link)`
width:50vw;
height:60px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
background-color: white;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
position:relative;
p{
    color: #A8A4A4;
}
div{
    width:100%;
    height:5px;
    background-color: #A8A4A4;
    z-index:5;
    position:absolute;
    bottom:0px;
}
`;

const NavBarOficinas = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:fixed;
`;