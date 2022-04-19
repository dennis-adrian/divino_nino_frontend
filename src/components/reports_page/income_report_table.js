import React from 'react';
import Table from 'react-bootstrap/Table';

const IncomeReportTable = ({ reservations }) => {
  
  const totalIncome = () => {
    const totalCosts = reservations.map(reservation => reservation.invoice?.totalCost)
    return totalCosts.reduce((partialSum, a) => partialSum + a, 0)
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nro. de Consulta</th>
          <th>Tipo de Consulta</th>
          <th>Paciente</th>
          <th>Especialidad</th>
          <th>Fecha</th>
          <th>Importe (Bs)</th>
        </tr>
      </thead>
      <tbody>
        {
          reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.invoice.number}</td>
              <td>Regular</td>
              <td>{reservation.patient.firstName} {reservation.patient.lastName}</td>
              <td>{reservation.specialty.name}</td>
              <td>{reservation.dateMade}</td>
              <td>{reservation.invoice.totalCost}</td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5}>Ingresos Totales (Bs)</td>
          <td>{totalIncome()}</td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default IncomeReportTable;