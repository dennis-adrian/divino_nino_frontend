import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';
import NewReservationModal from '../reservations_page/new_reservation_modal';

const PatientsTable = ({ availableSchedules, patients }) => {
  const [showNewReservationModal, setShowNewReservationModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  const handleAddReservationClick = (patient) => {
    setShowNewReservationModal(true)
    setSelectedPatient(patient)
  }

  return (
    <React.Fragment>
      <NewReservationModal
        availableSchedules={availableSchedules}
        patient={selectedPatient}
        show={showNewReservationModal}
        onHide={() => setShowNewReservationModal(false)}
      />
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>C.I.</th>
            <th colSpan={2}>Nombre</th>
            <th>Fecha de Nacimiento</th>
            <th>Teléfono</th>
            <th className="text-center" colSpan={3}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            patients.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.identification}</td>
                  <td colSpan={2}>{patient.firstName} {patient.lastName}</td>
                  <td>{patient.birthDate}</td>
                  <td>{patient.phone}</td>
                  <td className="text-center">
                    <FontAwesomeIcon 
                      icon={faPlusCircle} 
                      onClick={() => handleAddReservationClick(patient)
                    }/>
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                  <td className="text-center">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </td>
                </tr>
            ))
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default PatientsTable;