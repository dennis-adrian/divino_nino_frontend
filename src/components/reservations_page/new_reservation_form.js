import React from 'react';
import moment from 'moment';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';

const NewReservationForm = ({
  doctors,
  handleDateChange,
  handleSpecialtyChange,
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
          <Row className="form-row">
            <Form.Group className="mb-3 col-md-6" controlId="reservation_date">
              <Form.Label>Fecha de la reserva</Form.Label>
              <Form.Control type="date" onChange={e => handleDateChange(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="reservation_time">
              <Form.Label>Hora de la reserva</Form.Label>
              <Form.Control type="time"/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="doctor">
            <Form.Label>Médico</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => handleSpecialtyChange(e.target.value)}>
              <option value={0} defaultValue={true}>Elija una opción</option>
              { doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>Dr(a) {doctor.firstName} {doctor.lastName}</option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </React.Fragment>
      }
    </Form>
  )
}

export default NewReservationForm;