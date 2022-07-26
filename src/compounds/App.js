import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import Login from './login/Login'
import CadastroUsuario from './login/CadastroUsuario'
import CDConversas from './doubtCenter/CDConversas'
import CDDuvidas from './doubtCenter/CDDuvidas'
import CDAjude from './doubtCenter/CDAjude'

import HomePage from "./HomePage";
import WorkshopGrupi from "./workshop/WorkshopGrupi"
import WorkshopOpa from "./workshop/WorkshopOpa"
import Tutoria from "./tutoring/Tutoria";

import UserContext from "../providers/UserContext";
import NavSideBarContext from "../providers/NavSideBarContext";

import foto from "./../assets/images/perfilfoto.jpg"


function App() {

  const [user, setUser] = useState(foto);
  const [sideBar, setSideBar] = useState(false);

  //value={{ user, setUser }}
  // <Route path="/CDDuvidas" element={<CDDuvidas />} />
  // <Route path="/CDAjude" element={<CDAjude />} />
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <NavSideBarContext.Provider value={{sideBar, setSideBar}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/CDConversas" element={<CDConversas />} />
              <Route path="/CDDuvidas" element={<CDDuvidas />} />
              <Route path="/CDAjude" element={<CDAjude />} />
              <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
              <Route path="/homePage" element={<HomePage />} />
              <Route path="/oficinas/opa" element={<WorkshopOpa />} />
              <Route path="/oficinas/grupi" element={<WorkshopGrupi />} />
              <Route path="/tutoria" element={<Tutoria />} />
            </Routes>
          </BrowserRouter>
        </NavSideBarContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
//<Route path="/cadastro" element={<Schedule />}></Route>