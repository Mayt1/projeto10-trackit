import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

import { StyleSheetConsumer } from "styled-components";

export default function Habits({token, image}){

    return(
        <>
            <p>habitos</p>
            <img src={image} alt="imagem"></img>
            <p>{token}</p>
        </>
    );
}