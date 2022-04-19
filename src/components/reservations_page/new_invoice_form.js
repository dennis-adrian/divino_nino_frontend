import React from 'react'

import Form from 'react-bootstrap/Form';

const NewInvoiceForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="client">
        <Form.Label>Cliente</Form.Label>
        <Form.Select aria-label="Default select example">
          <option value="regular" defaultValue={true}>Regular - 100Bs</option>
          <option value="followup">Reconsulta - 50Bs</option>
        </Form.Select>
      </Form.Group>
    </Form>
  )
}

export default NewInvoiceForm;