import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import NewReservationBar from './new_reservation_bar';

const ReservationsPage = () => {

  return (
    <Container className="pt-4">
      <NewReservationBar />
    </Container>
  )
}

export default ReservationsPage