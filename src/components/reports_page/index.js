import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import IncomeReportTable from './income_report_table';

const ReportsPage = () => {
  return (
    <Container>
      <div className="d-flex pb-4 pt-4 w-100 justify-content-end">
        <Button className="align-right">Exportar a PDF</Button>
      </div>
      <IncomeReportTable />
    </Container>
  )
}

export default ReportsPage