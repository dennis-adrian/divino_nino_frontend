import React, { useState, useEffect } from 'react';

import { get, deleteRequest } from '../../helpers/api'

import Container from 'react-bootstrap/Container';
import ReservationsTable from './reservations_table';

const fetchReservations = async() => {
  const url = 'http://localhost:3000/reservations';
  return await get(url);
}

const deleteReservation = async(id) => {
  const url = `http://localhost:3000/reservations/${id}`;
  return await deleteRequest(url);
}

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations().then(data => {
      setReservations(data.reservations)
    });
  }, []);

  const handleDeleteReservation = (id) => {
    deleteReservation(id);
    const cleanReservations = reservations.filter(reservation => reservation.id !== parseInt(id));
    setReservations(cleanReservations);
  }

  return (
    <Container className="pt-4">
      <ReservationsTable reservations={reservations} deleteReservation={handleDeleteReservation}/>
    </Container>
  )
}

export default ReservationsPage