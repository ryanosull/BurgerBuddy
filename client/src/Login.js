import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?








function Example(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
    <div>
      <Button color="success" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Please enter your email and password below.</ModalHeader>
        <ModalBody>
        <Form>
  <Row className="row-cols-lg-auto g-3 align-items-center">
    <Col>
      <Label
        className="visually-hidden"
        for="exampleEmail"
      >
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="email address"
        type="email"
      />
    </Col>
    <Col>
      <Label
        className="visually-hidden"
        for="examplePassword"
      >
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="password"
        type="password"
      />
    </Col>
    <Col>

    </Col>

  </Row>
</Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={toggle}>
            Login
            </Button>{' '}
            <Button color="warning" onClick={toggle}>
            Cancel
            </Button>
        </ModalFooter>
        </Modal>
    </div>
  );
}

export default Example;