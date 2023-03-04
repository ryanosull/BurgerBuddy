import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; //FormGroup?
import "./Signup.css"








function Signup (args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
    <div>
      <Button id="signupButton" color="success" onClick={toggle}>
        Signup
      </Button>
      <Modal id="modal" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Enter your info below to signup!</ModalHeader>
        <ModalBody  >
        <Form>
  <Row className="row-cols-lg-auto g-3 align-items-center">
  <Col>
      <Label
        className="visually-hidden"
        for="firstName"
      >
        First name
      </Label>
      <Input
        id="firstName"
        name="firstName"
        placeholder="first name"
        type="text"
        required
      />
    </Col>
    <Col>
      <Label
        className="visually-hidden"
        for="lastName"
      >
        Last Name
      </Label>
      <Input
        id="lastName"
        name="lastName"
        placeholder="last name"
        type="text"
        required
      />
    </Col>
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
        required
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
        maxlength="20"
        minlength="8"
        required
      />
    </Col>
    <Col>

    </Col>

  </Row>
</Form>
        </ModalBody>
        <ModalFooter>
            <Button color="success" onClick={toggle}>
            Signup
            </Button>{' '}
            <Button color="warning" onClick={toggle}>
            Cancel
            </Button>
        </ModalFooter>
        </Modal>
    </div>
  );
}

export default Signup;