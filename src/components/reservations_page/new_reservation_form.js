import React from 'react';
import moment from 'moment';

import Form from 'react-bootstrap/Form';

const NewReservationForm = ({
  doctors = [],
  handleDateChange,
  handleScheduleChange,
  handleSpecialtyChange,
  schedulesFilteredByDateAndSpecialty,
  selectedDate,
  selectedSpecialty,
  specialties
}) => {
  return (
    <Form onSubmit={() => console.log('hello world')}>
      <Form.Group className="mb-3" controlId="reservation_type">
        <Form.Label>Tipo de Reserva</Form.Label>
        <Form.Select aria-label="Default select example">
          <option value="regular" defaultValue={true}>Regular - 100Bs</option>
          <option value="followup">Reconsulta - 50Bs</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="reservation_type">
        <Form.Label>Especialidad</Form.Label>
        <Form.Select aria-label="Default select example" onChange={e => handleSpecialtyChange(e.target.value)}>
          <option value={0} defaultValue={true}>Elija una opción</option>
          { specialties.map((specialty) => (
              <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
            ))
          }
        </Form.Select>
      </Form.Group>

      { selectedSpecialty &&
        <React.Fragment>
          <Form.Group className="mb-3 col-md-6" controlId="reservation_date">
            <Form.Label>Fecha de la reserva</Form.Label>
            <Form.Control type="date" onChange={e => handleDateChange(e.target.value)}/>
          </Form.Group>

          {schedulesFilteredByDateAndSpecialty?.length > 0 &&
            <Form.Group className="mb-3" controlId="doctor">
              <Form.Label>Médico y hora de la reserva</Form.Label>
              <Form.Select aria-label="Default select example" onChange={e => handleScheduleChange(e.target.value)}>
                <option value={0} defaultValue={true}>Elija una opción</option>
                { schedulesFilteredByDateAndSpecialty.map((schedule) => (
                    <option 
                      key={schedule.id} 
                      value={schedule.id}
                    >
                      Dr(a) {schedule.doctor.firstName} {schedule.doctor.lastName} - {moment(schedule.startTime).format('HH.mm')}
                    </option>
                  ))
                }
              </Form.Select>
            </Form.Group>
          }
        </React.Fragment>
      }
    </Form>
  )
}

export default NewReservationForm;