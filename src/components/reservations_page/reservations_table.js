import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

const ReservationsTable = ({ deleteReservation, reservations }) => {
  return (
    <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th colSpan={2}>Paciente</th>
            <th colSpan={2}>Médico</th>
            <th>Especialidad</th>
            <th>Hora</th>
            <th className="text-center" colSpan={3}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            reservations.map(reservation => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td colSpan={2}>{reservation.patient.firstName} {reservation.patient.lastName}</td>
                  <td colSpan={2}>{reservation.schedule.doctor.firstName} {reservation.schedule.doctor.lastName}</td>
                  <td>{reservation.specialty.name}</td>
                  <td>{moment(reservation.schedule.startTime).format('HH:mm')}</td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteReservation(reservation.id)} />
                  </td>
                </tr>
            ))
          }
        </tbody>
      </Table>
  )
}

export default ReservationsTable;