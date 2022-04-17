import React, { useState, useEffect } from 'react';

import { post } from '../../helpers/api'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewReservationForm from './new_reservation_form';
import moment from 'moment';

const NewReservationModal = (props) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedSchedule, setSelectedSchedule] = useState();
  const [canSubmit, setCanSubmit] = useState(false);

  const { availableSchedules, patient, show, setShowNewReservationModal } = props;

  useEffect(() => {
    if(!show) {
      setSelectedSpecialty();
      setSelectedDate();
      setSelectedSchedule();
    }
  }, [show]);

  useEffect(() => {
    if (selectedDate && selectedSchedule && selectedSpecialty) {
      setCanSubmit(true);
    }
  }, [selectedDate, selectedSchedule, selectedSpecialty]);

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

  const filterSchedulesByDateAndSpecialty = () => {
    if (selectedDate && selectedSpecialty) {
      return availableSchedules.filter(schedule => {
        return schedule && (schedule.date === selectedDate && schedule.specialtyId === selectedSpecialty.id)
      });
    }
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

  const handleScheduleChange = (schedule_id) => {
    if (schedule_id) {
      setSelectedSchedule(availableSchedules.find(schedule => schedule.id === parseInt(schedule_id)));
    }
  }

  const handleSubmit = () => {
    const response = post('http://localhost:3000/reservations.json', {
      dateMade: moment().format('DD/MM/yyyy'),
      status: 'confirmed',
      specialtyId: selectedSpecialty.id,
      patientId: patient.id,
      scheduleId: selectedSchedule.id,
      reservationFeeId: 1,
    })
    response.then((res) => {
      if (res.id) {
        setShowNewReservationModal(false);
      }
    })
  };

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
          handleDateChange={handleDateChange}
          handleScheduleChange={handleScheduleChange}
          handleSpecialtyChange={handleSpecialtyChange}
          selectedDate={selectedDate}
          selectedSpecialty={selectedSpecialty}
          schedulesFilteredByDateAndSpecialty={filterSchedulesByDateAndSpecialty()}
          specialties={filterSpecialties()}
        />
        <h5>Datos de Facturación</h5>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button disabled={!canSubmit} variant="primary" onClick={handleSubmit}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewReservationModal;