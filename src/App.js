import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

import HomePage from './components/home_page';
import PatientsPage from './components/patients_page';
import ReservationsPage from './components/reservations_page'
import ReportsPage from './components/reports_page'

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Clínica Divino Niño</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">Inicio</Link>
              <Link className="link" to="/reservas">Reservas</Link>
              <Link className="link" to="/pacientes">Pacientes</Link>
              <Link className="link" to="/reportes">Reportes</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservas" element={<ReservationsPage />} />
        <Route path="/pacientes" element={<PatientsPage />} />
        <Route path="/reportes" element={<ReportsPage />} />
      </Routes>
    </Router>
  )
}

export default App