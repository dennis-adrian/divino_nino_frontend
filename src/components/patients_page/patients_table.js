import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';

const PatientsTable = ({ patients }) => {
  return (
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
                  <FontAwesomeIcon icon={faEye} />
                </td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faPenToSquare} />
                </td>
                <td className="text-center">
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default PatientsTable;