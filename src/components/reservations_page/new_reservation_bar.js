import React from 'react';
import Button from 'react-bootstrap/Button'
import NewReservationModal from './new_reservation_modal';

const NewReservationBar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>Nueva Reserva Paciente Nuevo</Button>
      <Button variant="primary" onClick={() => setModalShow(true)}>Nueva Reserva Paciente Antiguo</Button>

      <NewReservationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default NewReservationBar;