import React, { useEffect, useState } from 'react';

import { get } from '../../helpers/api'

import Container from 'react-bootstrap/Container';
import PatientsTable from './patients_table';

const fetchPatients = async() => {
  const url = 'http://localhost:3000/patients';
  return await get(url);
}

const fetchSchedules = async() => {
  const url = 'http://localhost:3000/schedules?available=true';
  return await get(url);
}

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [availableSchedules, setAvailableSchedules] = useState([]);

  useEffect(() => {
    fetchPatients().then(data => {
      setPatients(data.patients)
    });
  }, []);

  useEffect(() => {
    fetchSchedules().then(data => {
      setAvailableSchedules(data.schedules)
    });
  }, []);

  return (
    <Container>
      <PatientsTable
        patients={patients}
        availableSchedules={availableSchedules}
      />
    </Container>
  );
}

export default PatientsPage