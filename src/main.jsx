import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Class from './Class.jsx'
import Controlled from './Controlled.jsx'
import Uncontrolled from './Uncontrolled.jsx'
import Forceupdate from './Forceup.jsx';
import Finddom from './Finddom.jsx'
import Componentlifecycle from './Compentlifecycle.jsx'
import Formevents from './Formevents.jsx'
import Style from './Style.jsx';
import List from './List.jsx'
import Lazy from './Lazy.jsx';
import Usestate from './Usestate.jsx'
import Use from './UseEffect.jsx'
import Reacttable from './Reacttable.jsx'
// import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Table from 'react-bootstrap/esm/Table.js'
import UseEffect from './UseEffect.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <App name="Zoro"/>
  <Class/>
  <Uncontrolled/>
  <Controlled/>
  <Forceupdate/>
  <Finddom/>
  <Componentlifecycle/>
  <Formevents/>
  <Style/>
  <BrowserRouter>
  <Routes>
  <Route path="/list" element={<List/>}/>
  <Route path="/lazy" element={ <Lazy/>}/> 
  </Routes>
  </BrowserRouter>
  <Reacttable/>
  <Usestate/>
  <Use/>
  </>
)
