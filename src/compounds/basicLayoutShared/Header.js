import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { StyleSheetConsumer } from "styled-components";

import SideBar from "./SideBar";
import NavSideBarContext from "./../../providers/NavSideBarContext";
import UserContext from "./../../providers/UserContext";

export default function Header() {

    const {sideBar, setSideBar } = useContext(NavSideBarContext);
    const {user} = useContext(UserContext)

    function showSideBar(){
        if(sideBar){
            return (
                <SideBar />
            );
        }else {
            return<></>
        }
    }

    const sideBarIsHere = showSideBar()
    
    return (
            <Head>
                <h1>InovaIF</h1>
                <UserLogo src={user} alt="logo-user" onClick={() => setSideBar(!sideBar)}></UserLogo>
                <>{sideBarIsHere}</>
            </Head>
);
}

const Head = styled.div`
    height:70px;
    width:100%;
    background-color: var(--corprincipal);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    display:flex;
    flex-direction:row;
    justify-content: space-between;

    h1{
        color:Black;
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 67px;
        font-family: 'Architects Daughter', cursive;
        margin-left:18px;
    }
`

const UserLogo = styled.img`
    width:51px;
    height:51px;
    margin-top:9px;
    margin-right:18px;
    border-radius:100%;
`;

