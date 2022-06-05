import React from "react";
import {Fragment, useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./login";
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Router>
          <Routes>
           
            <Route exact path="/" element={
              <Fragment>
               <Sidebar />
              </Fragment>

            }/>
            <Route path="/rooms/:roomId" element={
              <Fragment>
              <Sidebar />
              <Chat />
              </Fragment>
            } />
      
          </Routes>
        </Router>       

      </div>
      )}
    </div>
  );
}

export default App;
