import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { get} from '../../helpers/api'

import IncomeReportTable from './income_report_table';

const fetchReservations = async() => {
  const url = 'http://localhost:3000/reservations';
  return await get(url);
}

const ReportsPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations().then(data => {
      setReservations(data.reservations);
    });
  }, []);

  const filterReservations = () => {
    return reservations.filter(reservation => reservation.invoice);
  }

  const filteredReservations = filterReservations();
  return (
    <Container>
      <div className="d-flex pb-4 pt-4 w-100 justify-content-end">
        <Button className="align-right">Exportar a PDF</Button>
      </div>
      <IncomeReportTable reservations={filteredReservations} />
    </Container>
  )
}

export default ReportsPage