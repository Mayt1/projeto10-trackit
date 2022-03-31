import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import Login from './Login'
import CreateUser from './CreateUser'
import Today from "./Today";
import Habits from "./Habits";
import History from "./History";

function App() {

  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);


  return (
    <>
      <BrowserRouter>
		  	<Routes>
			  	<Route path="/" element={<Login saveToken={(token) => setToken(token)} saveUserImg={(image) => setImage(image)} />} />
          <Route path="/cadastro" element={<CreateUser />} />
          <Route path="/hoje" element={<Today token={token} image={image}/>} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={<History />} />
			  </Routes>
		  </BrowserRouter>
    </> 
  );
}

export default App;
//<Route path="/cadastro" element={<Schedule />}></Route>