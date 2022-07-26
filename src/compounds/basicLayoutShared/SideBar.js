import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
//import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useContext } from 'react';

import NavSideBarContext from "../../providers/NavSideBarContext";
import UserContext from "../../providers/UserContext";

//import { StyleSheetConsumer } from "styled-components";

export default function SideBar() {

    const { sideBar, setSideBar } = useContext(NavSideBarContext);
    const { user } = useContext(UserContext)

    return (
        <SideBars>
            <UserField onClick={() => setSideBar(!sideBar)}>
                <UserLogo src={user} alt="logo-user"></UserLogo>
                <h2>Nome lindo do usuario, legal de mais</h2>
            </UserField>
            <hr></hr>
            <Icone>
                <ion-icon name="notifications-outline"></ion-icon>
                <h2>Notificações</h2>
            </Icone>
            <Link to="/CDConversas" onClick={() => setSideBar(!sideBar)}> <Icone>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    <h2>Central de Duvidas</h2>       
            </Icone></Link>
            <Icone>
                <ion-icon name="help-circle-outline"></ion-icon>
                <h2>Perguntas frequentes</h2>
            </Icone>
            <hr></hr>
            <Icone>
                <ion-icon name="construct-outline"></ion-icon>
                <h3>Configurações</h3>
            </Icone>
            <h3>Version: 1.0.0</h3>
        </SideBars>
    );
}


const SideBars = styled.div`
display:flex;
flex-direction:column;
position:fixed;
background-color:#ffffff;
height:100%;
width:45%;
right: ${( sideBar ) => (sideBar ? '0':'-100%')};
transition: 350ms;
top:0;
z-index:12;
hr{
    width:100%;
    heigth:5px;
    border: 1;
    size:5px;
    color: var(--corprincipal);  
}
`;

const UserLogo = styled.img`
    width:51px;
    height:51px;
    margin:10px;
    border-radius:100%;
`;

const Icone = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-left:10px;
    padding-top:10px;
    padding-bottom:10px;

h2{
    margin-left:3px;
    justify-content: center;
    align-items:center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 17px;
    color: #000000;
}

ion-icon{
    font-size:30px;
}

&:hover {
    background-color: #dbead5;
  }
`
const UserField = styled.div`
    display:flex;
    flex-direction:row;
    
    align-items:center;

    h2{
        justify-content: center;
        align-items:center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #000000;
    }
`
