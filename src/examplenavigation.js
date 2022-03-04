import React from "react";
import Navbar, {Container} from "react-bootstrap";
import TodoApp from "./apptodo";
import HookEstado from "./HookEstado.js"
import HookEfecto from "./HookEfecto";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function ExampleNavegacion() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/hookestado">Hook de Estado</Link>
            </li>
            <li>
              <Link to="/hookefecto">Hook de Efecto</Link>
            </li>
            <li>
              <Link to="/todo">ToDo</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Routes>
            <Route exact path="/"  element={<Home />}> 
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
            </Route>
            <Route path="/hookestado" element={<HookEstado />}>
            </Route>
            <Route path="/hookefecto" element={<HookEfecto />}>
            </Route>
            <Route path="/todo" element={<TodoApp />}>
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }

  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }