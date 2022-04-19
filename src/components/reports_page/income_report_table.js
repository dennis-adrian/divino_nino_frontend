import React from 'react';
import Table from 'react-bootstrap/Table';

const IncomeReportTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nro.</th>
          <th>Nro. de Consulta</th>
          <th>Tipo de Consulta</th>
          <th>Paciente</th>
          <th>Especialidad</th>
          <th>Fecha</th>
          <th>Importe (Bs)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1245</td>
          <td>Regular</td>
          <td>Andrea Gonzales</td>
          <td>Medicina General</td>
          <td>12/04/2022</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>1246</td>
          <td>Reconsulta</td>
          <td>Ismael Gonzales</td>
          <td>Pediatría</td>
          <td>12/04/2022</td>
          <td>50</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1247</td>
          <td>Regular</td>
          <td>Carla Gomez</td>
          <td>Ginecología</td>
          <td>13/04/2022</td>
          <td>100</td>
        </tr>
        <tr>
          <td>4</td>
          <td>1248</td>
          <td>Reconsulta</td>
          <td>Antonieta Cortez</td>
          <td>Ginecología</td>
          <td>14/04/2022</td>
          <td>50</td>
        </tr>
        <tr>
          <td>5</td>
          <td>1249</td>
          <td>Regular</td>
          <td>Pedro Mendoza</td>
          <td>Medicina General</td>
          <td>15/04/2022</td>
          <td>100</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6}>Ingresos Totales (Bs)</td>
          <td>400</td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default IncomeReportTable;