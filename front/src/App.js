import React, { useState, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router,Routes,  Route } from "react-router-dom"
import Home from "./pages/home";
import Footer from "./components/Footer";
import Catalog from "./pages/catalog";
import Info from "./pages/Info";
import Where from "./pages/where";
import Admin from "./pages/admin";
import Cvet from "./pages/cvet";
import Personal from "./pages/personal";
import Header from "./components/Header";
import user from "./store/user";
import { observer } from "mobx-react-lite";
import role from "./store/role";
import Error from "./pages/Error";
import Cart from "./pages/Cart";


function App() {
  console.log(localStorage.getItem('role'))
  console.log(localStorage.getItem('id'))
  useEffect(() => {
    console.log(role.getRole())
    if (localStorage.getItem("role")) {
      role.getRole();
    }
  }, []);
return (
  <div>
 
     <Router> <Header/>
      <Routes>
       
          <Route exact path='/' element={<Home/>} />
          <Route path= '/catalog' element={<Catalog/>} />
          <Route path= '/info' element={<Info/>} />
          <Route path= '/where' element={<Where/>} />       
          <Route path= '/catalog/:id' element={<Cvet/>} />

          { user.auth ?(
            <>
          
            <Route path= '/personal' element={<Personal/>} /> {" "}
            <Route path= '/cart' element={<Cart/>} />
        
            </>
          ):(
            <></>
          )}
             { role.isAdmin ?<Route path= '/admin' element={<Admin/>} />:<></>}
         
          
             <Route path="*" element={<Error/>} />
          
          
          </Routes>
        </Router>
       
        <div ><Footer/></div>
  </div>

      
      
     
  );
}
export default observer(App);