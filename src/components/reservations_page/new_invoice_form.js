import React from 'react'

import Form from 'react-bootstrap/Form';

const NewInvoiceForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="invoice_number">
        <Form.Label>Número de Factura</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="client">
        <Form.Label>Nombre del Cliente</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre del cliente" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="client">
        <Form.Label>Apellido del Cliente</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el apellido del cliente" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="client">
        <Form.Label>NIT</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el NIT del cliente" />
      </Form.Group>
    </Form>
  )
}

export default NewInvoiceForm;