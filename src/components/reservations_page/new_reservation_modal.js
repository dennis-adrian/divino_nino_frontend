import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewReservationForm from './new_reservation_form';

const NewReservationModal = (props) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const { availableSchedules, patient, show } = props;

  useEffect(() => {
    if(!show) {
      setSelectedSpecialty();
    }
  }, [show]);

  const filterSpecialties = () => {
    return availableSchedules.map((schedule) => schedule.specialty);
  };

  const filterDoctors = () => {
    if (selectedSpecialty) {
      const specialty = findOneSpecialty(selectedSpecialty.id);
      return specialty?.doctors || [];
    }
  };

  const findOneSpecialty = (specialty_id) => {
    const specialties = filterSpecialties();
    return specialties.find(specialty => specialty.id === parseInt(specialty_id))
  };

  const handleSpecialtyChange = (specialty_id) => {
    const specialty = specialty_id ? findOneSpecialty(specialty_id) : null;

    if (specialty) {
      setSelectedSpecialty(specialty);
    } else {
      setSelectedSpecialty();
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar Reserva
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Datos de la Reserva</h5>
        <NewReservationForm
          handleSpecialtyChange={handleSpecialtyChange}
          handleDateChange={handleDateChange}
          selectedSpecialty={selectedSpecialty}
          doctors={filterDoctors()}
          specialties={filterSpecialties()}
        />
        <h5>Datos de Facturación</h5>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit">Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewReservationModal;