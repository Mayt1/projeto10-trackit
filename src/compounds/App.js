import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './../assets/images/logo.svg';
import './App.css';

import Login from './Login'
import CreateUser from './CreateUser'

function App() {
  return (
    <>
      <BrowserRouter>
		  	<Routes>
			  	<Route path="/" element={<Login />} />
          <Route path="cadastro/" element={<CreateUser />} />
			  </Routes>
		  </BrowserRouter>
    </> 
  );
}

export default App;
//<Route path="/cadastro" element={<Schedule />}></Route>