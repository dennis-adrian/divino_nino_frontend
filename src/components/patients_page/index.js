import React, { useEffect, useState } from 'react';

import { get } from '../../helpers/api'

import Container from 'react-bootstrap/Container';
import PatientsTable from './patients_table';

const fetchPatients = async() => {
  const url = 'http://localhost:3000/patients';
  return await get(url);
}

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients().then(data => {
      setPatients(data.patients)
    });
  }, []);

  return (
    <Container>
      <PatientsTable patients={patients}/>
    </Container>
  );
}

export default PatientsPage